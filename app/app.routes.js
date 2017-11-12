angular
.module('mainApp')
.config(routeConfigSettings);

routeConfigSettings.$inject = ['$routeProvider'];

function routeConfigSettings($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/check-in.html',
		controller: 'checkInController'
	}).when('/shelters', {
		templateUrl: 'app/views/shelters.html',
		controller: 'shelterController'
	}).when('/directions', {
		templateUrl: 'app/views/directions.html',
		controller: 'directionsController'
	})
}
