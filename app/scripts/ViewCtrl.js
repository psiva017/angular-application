define(["app/scripts/app.js"],function(app){
    app.controller('ViewCtrl', function($scope,$location) {
    	console.log("signin controller is loaded");
		$scope.LoginFn=function(){
			$location.path('/length');
		}
    })
    });

