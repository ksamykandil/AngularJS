var UserAppModule = angular.module('UserApp', [ 'ngRoute' ]);

UserAppModule.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/json', {
		templateUrl : 'json.html'
	}).when('/raw', {
		templateUrl : 'raw.html'
	});
} ]);

UserAppModule.factory('ConvertService', function() {
	return {
		jsonConvert : function(user) {
			return angular.toJson(user);
		}
	};
});

UserAppModule.controller('UserController', UserController);
