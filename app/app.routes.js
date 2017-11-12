angular
.module('mainApp')
.config(routeConfigSettings);

routeConfigSettings.$inject = ['$routeProvider'];

function routeConfigSettings($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/check-in.html'
	})
}
