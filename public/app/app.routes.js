angular
.module('mainApp')
.config(routeConfigSettings);

routeConfigSettings.$inject = ['$routeProvider'];

function routeConfigSettings($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/test.html',
		controller: 'testController'
	})
	.when('/chart', {
		templateUrl: 'app/views/highchart.html',
		controller: 'chartController'
	})
	.otherwise('/')
}
