angular
	.module('mainApp')
	.factory('ShelterFactory', ShelterFactory);

ShelterFactory.$inject = ['$http'];

// set up the services needed for this factory
function ShelterFactory($http){

	var service = {
		getShelters: getShelters
	};

	return service;

	////////////////////

	function getShelters(){
		return $http.get('includes/ajax.php?get-shelters=true')
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
}