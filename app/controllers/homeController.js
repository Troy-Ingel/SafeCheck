angular
.module('mainApp')
.controller('homeController', homeController);

homeController.$inject = ['$scope', 'GeoLocationFactory', 'GoogleMapsFactory'];

function homeController($scope, GeoLocationFactory, GoogleMapsFactory){
	GoogleMapsFactory.getWalkingDirections('210 glenn drive stratford', 'boston ma').then(function(response){
		console.log(response)
	});

	activate();

	///////////

	function activate(){
		initMap();
	}
	function initMap() {
		$scope.loading = true;

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

	}
}