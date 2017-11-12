angular
	.module('mainApp')
	.controller('shelterController', shelterController);

shelterController.$inject = ['$scope', '$location', 'ShelterFactory'];

function shelterController($scope, $location, ShelterFactory){

	$scope.showDirections = showDirections;

	activate();

	///////////

	function activate(){
		ShelterFactory.getShelters().then(function(response){
			$scope.shelters = response;
		});
	}
	function showDirections(shelter){
		$scope.$parent.destination = shelter.name + ', ' + shelter.address;
		$location.path('/directions');
	}
}