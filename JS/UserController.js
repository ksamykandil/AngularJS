var UserController = function($scope, ConvertService) {
	$scope.user = {
		name : "",
		email : "",
		message : ""
	};

	$scope.jsonString = ConvertService.jsonConvert($scope.user);

	$scope.convert = function() {
		$scope.jsonString = ConvertService.jsonConvert($scope.user);
	};
};

UserController.$inject = [ "$scope", "ConvertService" ];