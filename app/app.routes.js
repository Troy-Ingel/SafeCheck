angular
.module('mainApp')
.config(routeConfigSettings);

routeConfigSettings.$inject = ['$routeProvider'];

function routeConfigSettings($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/home.html',
		controller: 'homeController'
	}).otherwise({
		templateUrl: 'app/views/home.html',
		controller: 'homeController'
	});
}
