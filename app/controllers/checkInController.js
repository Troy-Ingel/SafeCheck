angular
	.module('mainApp')
	.controller('checkInController', checkInController);

checkInController.$inject = ['$scope', 'CheckInFactory', '$cookies','GoogleMapsFactory'];

function checkInController($scope, CheckInFactory, $cookies, GoogleMapsFactory){
	
	$scope.data = {};
	$scope.setStatus = setStatus;
	$scope.updating = false;

	activate();

	///////////

	function activate(){
		$scope.statusSet = $cookies.get('statusSet');

		if($scope.statusSet){
			CheckInFactory.getPerson($scope.statusSet).then(function(response){
				console.log(response)
				$scope.data.first_name = response.first_name;
				$scope.data.last_name = response.last_name;
				$scope.data.status = response.status;
			});
		}
	}
	function setStatus(){

		if($scope.statusSet){
			CheckInFactory.updateStatus($scope.statusSet, $scope.data.status).then(function(response){
				$scope.$parent.updateMarkers();
			});
		} else{
			var data = {
				lat: $scope.$parent.lat,
				lon: $scope.$parent.lon,
				address: $scope.$parent.currentAddress,
				first_name: $scope.data.first_name,
				last_name: $scope.data.last_name,
				status: $scope.data.status
			}

			CheckInFactory.addPerson(data).then(function(response){
				$cookies.put('statusSet', response);
				$scope.statusSet = true;
				$scope.$parent.updateMarkers();
			});
		}
	}
}