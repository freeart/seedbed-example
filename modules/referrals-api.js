const swagger = require('swaggertoexpress'),
	apiJSON = require('../public/referrals-api.json');

module.exports = function () {
	const router = swagger.build(apiJSON, {
		"/": {
			"get": (headers, parameters, res) => {
				res.status(200).send({id: 1})
			}
		}
	})

	this.express.use('/', router)

	return Promise.resolve()
};
