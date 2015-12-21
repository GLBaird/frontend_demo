
var InfoController = [
    "$scope", "$rootScope", "GithubData", "$routeParams", "$location",
    function($scope, $rootScope, GithubData, $routeParams, $location){

        console.log("Info Controller Loaded");

        // mark tab as active
        $("ul.nav li").removeClass("active").eq(0).addClass("active");

        var getInfoFromGithub = function(event, username) {
            $location.path("/info/"+username);

            // use our service
            GithubData.getRepoData(username)
                .then(function(data){
                    // success
                    $scope.data = data;
                    $rootScope.error = undefined;
                }, function(msg){
                    // error!
                    $rootScope.error = msg;
                    $scope.data = undefined;
                });
        };

        // Pass details to rootscope for TabSearchController
        if (typeof $routeParams.username !== "undefined") {
            $rootScope.username = $routeParams.username;
            $rootScope.accountName = $routeParams.username;
            getInfoFromGithub(null, $routeParams.username);
        }

        // listen for event from TabSearchController
        $scope.$on("getdata", getInfoFromGithub);

    }
];

module.exports = InfoController;