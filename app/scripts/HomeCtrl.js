define(["app/scripts/app.js"],function(app){
	app.controller("HomeCtrl",function($scope,$location){
		console.log("home controller is loaded");
		$scope.submit=function(){
			console.log("signin controller is loaded");
			$location.path('/temperature');
		}
})
});
