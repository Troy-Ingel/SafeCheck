angular
	.module('mainApp')
	.factory('CheckInFactory', CheckInFactory);

CheckInFactory.$inject = ['$http'];

// set up the services needed for this factory
function CheckInFactory($http){

	var service = {
		getPeople: getPeople,
		addPerson: addPerson
	};

	return service;

	////////////////////

	function getPeople(){
		return $http.get('includes/ajax.php?get-people=true')
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
	function addPerson(data){
		data['add-status'] = 'true';
		return $http.post('includes/ajax.php', data)
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
}