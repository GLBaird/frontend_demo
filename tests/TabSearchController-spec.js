// TESTS for TabSearchControllerController

// load app and all frameworks with require
var app = require("../src/js/app");

// Define unit test for controller
describe("TabSearchController Tests", function() {

    console.log("Testing TabSearchController");

    // load app module through mocks
    beforeEach(angular.mock.module("GitDemoApp"));

    var $controller, $rootScope;

    // define $controller by getting mocks to inject code into our variable
    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope  = _$rootScope_;
    }));

    // test $scope with this controller
    describe("Tests - setup", function() {

        // holding objects for $scope, DemoService and controller
        var $scope, rootScope, controller, eventHandler;

        // setup objects for each test
        beforeEach(function() {

            // fake object for scope testing (can also use $rootScope.new()
            // with Mocks to make a legit scope object!)
            $scope = $rootScope.$new();
            rootScope = $rootScope.$new();

            // setup TabSearchController and pass it the fake objects
            controller = $controller("TabSearchController", { $scope: $scope, $rootScope: rootScope });


            eventHandler = {
                eventReceived: function(event, username) {
                    eventHandler.event = event;
                    eventHandler.username = username;
                }
            };

            // setup spy on eventHandler
            spyOn(eventHandler, "eventReceived").and.callThrough();
        });

        it("Should load the TabSearchController", function(){
            expect(controller).toBeDefined();
        });

        it("Should define on $scope .askInfoControllerToGetData and broadcast 'getdata' when given a name", function() {
            expect($scope.askInfoControllerToGetData).toBeDefined();

            // add event handler to controller for broadcast
            rootScope.$on('getdata', eventHandler.eventReceived);

            // send message
            $scope.askInfoControllerToGetData("TestName");

            // check data has been set
            expect(eventHandler.eventReceived).toHaveBeenCalled();
            expect(eventHandler.event).toBeDefined();
            expect(eventHandler.username).toEqual("TestName");
        });

        it("Should define $rootScope.error when called without a name to be a string", function() {

            // send message
            $scope.askInfoControllerToGetData();

            // check data has been set
            expect(rootScope.error).toBeDefined();
            expect(typeof rootScope.error === "string").toBeTruthy();
        });

    });

});