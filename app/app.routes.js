angular
.module('mainApp')
.config(routeConfigSettings);

routeConfigSettings.$inject = ['$routeProvider'];

function routeConfigSettings($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/check-in.html',
		controller: 'checkInController'
	}).when('/shelters', {
		templateUrl: 'app/views/shelters.html'
	}).when('/directions', {
		templateUrl: 'app/views/directions.html',
		controller: 'directionsController'
	})
}
