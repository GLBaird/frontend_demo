// will download Github data and cache data in memory to boost app speed when repeating searches
// use $http for directly downloading and handling data, would use a restful API Angular Modules
// (like ngResource) if working with app defined RESTful APIs.

var GithubData = [
    "$http", "$q",
    function($http, $q){

        var cachedData = {};

        var getData = function(username) {

            console.log("Getting Github Data,\nLocal data cached: ", cachedData);

            // make and fulfil a promise
            return $q(function(resolve, reject){

                // check if data is cahced
                if (cachedData[username]) {
                    resolve(cachedData[username]);
                } else {

                    // make error handler
                    function handleError(response) {
                        reject("Network Error "+response.status+" "+response.statusText);
                    }

                    $http.jsonp("https://api.github.com/users/"+username+"?callback=JSON_CALLBACK")
                        .then(function(response){
                            // we got the user data
                            cachedData[username] = response.data.data;

                            // load repos list
                            return $http.jsonp("https://api.github.com/users/"+username+"/repos?callback=JSON_CALLBACK");
                        })
                        .then(function(response){

                            // we got the repos list
                            cachedData[username].repos = response.data.data;

                            // lookup contributors
                            response.data.data.forEach(function (repo) {
                                repo.contributors = [];
                                $http.get(repo.contributors_url)
                                    .then(function (response) {
                                        repo.contributors = response.data;
                                    });
                            });

                            // fulfil promise
                            resolve(cachedData[username]);

                        }, handleError);

                }

            });
        };

        return {
            getRepoData: getData,
            testDataCached: function(name) {
                return typeof cachedData[name] !== "undefined";
            }
        }
    }
];
module.exports = GithubData;