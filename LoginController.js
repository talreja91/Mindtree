var app = angular.module('myApp', []);
app.controller('loginController', function($scope,$http) {
    
	$scope.clearEmail = function()
	{
		$scope.id="";
	}
	$scope.clearPassword = function()
	{
		$scope.pswd="hhh";
	}
	$scope.submitForm = function()
	{
		var params = JSON.stringify({type:"user", username:$scope.id, password:$scope.pswd});
		$scope.pswd=params;
	$http({
		method : "POST",
		url : "file:///C:/Users/M1039488/Desktop/mindtree/homepage.html",
		data : params
		}).then(function mySuccess(response)
					{
						  $scope.id = "200";
					}, function myError(response) 
					{
						  $scope.id= "404";
					});
	}
});