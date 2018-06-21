const swagger = require('swaggertoexpress'),
	apiJSON = require('./user-api.json');

module.exports = function () {
	const router = swagger.build(apiJSON, {
		"/user": {
			"get": (headers, parameters, res) => {
				res.status(200).send({id: 1})
			}
		},
		"/login": {
			"get": (headers, parameters, res) => {
				res.status(200).send({token: 2})

			}
		}
	})

	this.express.use('/', router)

	return Promise.resolve()
};
