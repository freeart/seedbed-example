const Seedbed = require("seedbed");

const core = Seedbed({
	config: require("./config"),
	plugins: require("./plugins"),
	modules: require("./modules")
});