angular
	.module('mainApp')
	.controller('checkInController', checkInController);

checkInController.$inject = ['$scope', 'GeoLocationFactory', 'GoogleMapsFactory'];

function checkInController($scope, GeoLocationFactory, GoogleMapsFactory){
	
	activate();

	///////////

	function activate(){

	}
	function getDirections(){
		
	}
}