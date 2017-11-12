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

			// GoogleMapsFactory.addMarker(myLatlng, map, 'Title', 'Me');


			CheckInFactory.getPeople().then(function(response){

				let people = response;

				for(let i = 0; i < people.length; i++){
					if(people[i]){

						let curPerson = people[i];

						let position = {
							lat: parseFloat(curPerson.lat),
							lng: parseFloat(curPerson.lon)
						};

						let initials = (curPerson.first_name.substring(0, 1) + curPerson.last_name.substring(0, 1)).toUpperCase();
						
						let status = curPerson.status;
						let name = curPerson.first_name + ' ' + curPerson.last_name;
						GoogleMapsFactory.addMarker(position, map, name, initials, getMarkerColor(status));
					}
				}
			});
		});
	}

	function getDirections(){
		GoogleMapsFactory.getWalkingDirections('210 glenn drive stratford', 'boston ma').then(function(response){
			console.log(response);
		});
	}

	function getMarkerColor(status){
		if(status == 'G'){
			return 'img/GoogleMapsMarkers/green_MarkerS.png';
		}
		else if(status == 'I'){
			return 'img/GoogleMapsMarkers/yellow_MarkerA.png';
		}else{
			return 'img/GoogleMapsMarkers/red_MarkerA.png';
		}
	}
	
	function getCurrentPage(){
		return $location.path();
	}
}