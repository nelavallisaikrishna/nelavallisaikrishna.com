angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'
		})

		.when('/home', {
			templateUrl: 'views/homezz.html',
			controller: 'MainController'
		});

	$locationProvider.html5Mode(true);

}]);