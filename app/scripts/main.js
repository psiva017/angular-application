require.config({
   
    paths: {
        //defining the variables to the path of resepective js files present in the project foler.
    	'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',   
    	'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
    	'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min'
    },
    shim: {
        //as requirejs follows AMD, so shim confirms the loading of dependent file in sequence.
        //here angularAMD and angular-route is dependent on angular, so angular is loaded before the two
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },
    //deps will execute app.js
    deps: ["app/scripts/app.js"]
});
