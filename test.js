const assert = require("assert");

const ergo = require("./ergo.js");

const ergoAmount = 1000;

ergo.toUSD(ergoAmount).then((usdAmount) => {
	assert(usdAmount > ergoAmount);
});

console.log("OK");