//Registry for all services

var serviceList = {

	factories: {
		GithubData: require("./githubdata-factory")
	},

	// this is not used at all in the demo, but would be in a bigger app
	services: {

	}

};

module.exports = serviceList;