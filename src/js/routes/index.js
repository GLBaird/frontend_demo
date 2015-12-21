// declare app routes, using ngRoute, could also use more powerful UI-Router
// also, data is called by controllers, if data was not based on input from
// main TabSearchController, could use .resolve to preload data

var routes = function($routeProvider) {

    $routeProvider
		.when("/info", {
			templateUrl: "js/views/info.html",
			controller: "InfoController"
		})

		.when("/info/:username", {
			templateUrl: "js/views/info.html",
			controller: "InfoController"
		})

		.when("/repos/:username", {
			templateUrl: "js/views/repos.html",
			controller: "ReposController"
		})

		.otherwise({
			redirectTo: "/info"
		})

};

module.exports = routes;
