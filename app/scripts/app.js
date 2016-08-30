define(["angularAMD", "angular-route"], function(angularAMD) {
    var app = angular.module("webapp", ["ngRoute"]);    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: "app/pages/Home.html",
            controller: "HomeCtrl",
            //if all controller javascript file is defined in boot.js file,
            //there is no need to define controllerUrl in any of the case.
            controllerUrl: "app/scripts/HomeCtrl.js"
        }))
        .when("/temperature", angularAMD.route({
            templateUrl: "app/pages/View.html",
            controller: "ViewCtrl",
            controllerUrl: "app/scripts/ViewCtrl.js"
        }))
        .when("/length", angularAMD.route({
            templateUrl: "app/pages/Dashboard.html",
            controller: "DashboardCtrl",
            controllerUrl: "app/scripts/DashboardCtrl.js"
        }))
        .otherwise({
            redirectTo: "/"
        })
    });

    //this will bootstrap the application. There is no need to define 'ng-app' in HTML file
    return angularAMD.bootstrap(app);
});