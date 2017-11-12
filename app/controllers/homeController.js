angular
.module('mainApp')
.controller('homeController', homeController);

homeController.$inject = ['$location', '$scope', 'GeoLocationFactory', 'GoogleMapsFactory', 'CheckInFactory'];

function homeController($location, $scope, GeoLocationFactory, GoogleMapsFactory, CheckInFactory){
	
	var map = undefined;

	$scope.getCurrentPage = getCurrentPage;

	activate();

	///////////

	function activate(){
		// initMap();
	}
	function initMap() {
		// $scope.loading = true;

		GeoLocationFactory.getLocation(function(pos){

			$scope.$apply(function(){
				$scope.loading = false;
			});

			var myLatlng = {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			};

			map = GoogleMapsFactory.createMap('map', {
				zoom: 11,
				center: myLatlng
			});

			GoogleMapsFactory.addMarker(myLatlng, map, 'Title', 'Me');
		});

		CheckInFactory.getPeople().then(function(response){
			console.log(response)
		});
	}
	function getDirections(){
		GoogleMapsFactory.getWalkingDirections('210 glenn drive stratford', 'boston ma').then(function(response){
			console.log(response);
		});
	}
	function getCurrentPage(){
		return $location.path();
	}
}