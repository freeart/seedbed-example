const path = require("path");

module.exports = function () {
	this.config.set("project.port", 8080)
	this.config.set("project.www", path.join(__dirname, '../public/dist'))

	process.env.JWT_SECRET = "test";

	return Promise.resolve()
}