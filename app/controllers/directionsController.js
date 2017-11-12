angular
	.module('mainApp')
	.controller('directionsController', directionsController);

directionsController.$inject = ['$scope', 'GoogleMapsFactory'];

function directionsController($scope, GoogleMapsFactory){

	$scope.directionsLoaded = false;
	$scope.getDirections = getDirections;

	activate();

	///////////

	function activate(){

	}
	function getDirections(){
		GoogleMapsFactory.getDirections($scope.$parent.currentAddress, $scope.$parent.destination, $scope.mode).then(function(response){
			if(response.length > 0){
				$scope.directions = response[0].legs[0].steps;
				$scope.directionsLoaded = true;
				console.log("LEGS", response[0].legs);
				$scope.$parent.showDirections(response[0].legs);
			} else{
				$scope.directions = [];
			}
		})
	}
}