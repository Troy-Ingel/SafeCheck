angular
.module('mainApp')
.controller('mapController', mapController);

mapController.$inject = ['GeoLocationFactory', 'googleMapsFactory', '$scope'];

function mapController(GeoLocationFactory, googleMapsFactory, $scope){

	var map = undefined;

	activate();

	///////////////

	function activate(){
		initMap();
	}

	function initMap() {

		map = GoogleMapsFactory.createMap('map', {
			zoom: 11,
			center: myLatlng
		});

		for(let i = 0; i < people.length; i++){
			if(people[i]){
				var position = {
					lat: people.lat,
					lng: people.lon
				};

				var status = people.status;
				var name = people.first_name + ' ' + people.last_name;
			}
		}

		GoogleMapsFactory.addMarker(position, map, name, '', getMarkerColor(status));
	}


	function() getMarkerColor(status){
		if(status == 'G'){
			return '../../img/GoogleMapsMarkers/green_MarkerS';
		}
		else if(status == 'I'){
			return '../../img/GoogleMapsMarkers/yellow_MarkerA';
		}else{
			return '../../img/GoogleMapsMarkers/red_MarkerA';
		}
	}
}
