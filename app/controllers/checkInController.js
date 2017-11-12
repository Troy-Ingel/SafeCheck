angular
	.module('mainApp')
	.controller('checkInController', checkInController);

checkInController.$inject = ['$scope', 'CheckInFactory', '$cookies','GoogleMapsFactory'];

function checkInController($scope, CheckInFactory, $cookies, GoogleMapsFactory){
	
	$scope.setStatus = setStatus;

	activate();

	///////////

	function activate(){
		$scope.statusSet = $cookies.get('statusSet');
	}
	function setStatus(){
		var data = {
			lat: $scope.$parent.lat,
			lon: $scope.$parent.lon,
			address: $scope.$parent.currentAddress,
			first_name: $scope.data.first_name,
			last_name: $scope.data.last_name,
			status: $scope.data.status
		}

		CheckInFactory.addPerson(data).then(function(response){
			$cookies.put('statusSet', 'true');
			$scope.statusSet = true;
			$scope.$parent.initMap();
		});
	}
}