angular
	.module('mainApp')
	.factory('CheckInFactory', CheckInFactory);

CheckInFactory.$inject = ['$http'];

// set up the services needed for this factory
function CheckInFactory($http){

	var service = {
		getPeople: getPeople
	};

	return service;

	////////////////////

	function getPeople(){
		return $http.get('includes/ajax.php?get-people=true')
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
}