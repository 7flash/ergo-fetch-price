const rp = require("request-promise");

function fetchTicker() {
	return rp("https://api.coinmarketcap.com/v1/ticker/ergo/");
}

function convert(amount, rate) {
	return amount * rate;
}

module.exports = {
	fetchTicker: fetchTicker,

	toUSD(amount) {
		return fetchTicker().then((ticker) => {
			const rate = JSON.parse(ticker)[0].price_usd;

			return amount * rate;
		}).catch((err) => {
			return 0;
		})
	}
}