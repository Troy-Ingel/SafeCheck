angular
	.module('mainApp')
	.factory('CheckInFactory', CheckInFactory);

CheckInFactory.$inject = ['$http'];

// set up the services needed for this factory
function CheckInFactory($http){

	var service = {
		getPeople: getPeople,
		addPerson: addPerson,
		getPerson: getPerson,
		updateStatus: updateStatus
	};

	return service;

	////////////////////

	function getPeople(){
		return $http.get('includes/ajax.php?get-people=true')
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
	function getPerson(id){
		return $http.get('includes/ajax.php?get-person=true&id=' + id)
			.then((res)=>res.data[0])
			.catch((err)=>console.error(err));
	}
	function addPerson(data){
		data['add-status'] = 'true';
		return $http.post('includes/ajax.php', data)
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
	function updateStatus(id, status){
		const data = {
			'update-status': 'true',
			id: id,
			status: status
		};

		return $http.post('includes/ajax.php', data)
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
}