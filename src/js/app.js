// Angular Application Bootstrap File
// GitDemoApp
// Leon Baird

// Load controllers and services via Require and datatype as object using JSDocs
// This makes client side code totally object orientated using same techniques as NodeJS
// code server side, and also is useful technique for full Isomorphic Apps
// (though that would be using ReactJS rather than Angular)

/**
 * Function to dynamically load application components from service lists
 * @param {angular.Module} app
 * @param {string} componentType
 * @param {object} componentList
 */
function loadAppComponents(app, componentType, componentList) {
    for (var name in componentList) {
        if (componentList.hasOwnProperty(name)) {
            app[componentType](name, componentList[name]);
        }
    }
}

/** @type {object} */
var controllers = require("./controllers");
/** @type {object} */
var serviceList = require("./services");

// Define Angular Module
var app = angular.module("GitDemoApp", ["ngRoute"]);

// load services and controllers
loadAppComponents(app, "factory", serviceList.factories);
loadAppComponents(app, "controller", controllers);

// Load Routes
app.config(["$routeProvider", require("./routes")]);

module.exports = app;