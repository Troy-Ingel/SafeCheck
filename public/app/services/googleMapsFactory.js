angular
	.module('mainApp')
	.factory('GoogleMapsFactory', GoogleMapsFactory);

GoogleMapsFactory.$inject = ['$http'];

// set up the services needed for this factory
function GoogleMapsFactory($http){

	var service = {
		createMap: createMap,
		addMarker: addMarker,
		addListener: addListener,
		addMarkerListener: addMarkerListener,
		geocodeAddress: geocodeAddress,
		getTransitDirections: getTransitDirections,
		getDrivingDirections: getDrivingDirections,
		getWalkingDirections: getWalkingDirections,
		getDirections: getDirections,
		reverseGeocode: reverseGeocode
	};

	return service;

	/////////// JavaScript Map /////////

	function createMap(elementID, options){
		return new google.maps.Map(document.getElementById(elementID), options);
	}
	function addMarker(position, map, title, label, icon){
		var marker = new google.maps.Marker({
			position: position,
			map: map,
			title: title,
			label: label,
			icon: icon
		});

		return marker;
	}
	function addListener(map, event, callback){
		map.addListener(event, callback);
	}

	function addMarkerListener(marker, event, callback){
		marker.addListener(event, callback);
	}
	function geocodeAddress(address, callback){
		geocoder = new google.maps.Geocoder();

        geocoder.geocode({'address': address}, function(results, status) {
        	var location = results[0].geometry.location;
        	callback({
        		lat: location.lat(),
        		lng: location.lng()
        	});
        });
	}

	//////// Transit ////////

	function getTransitDirections(origin, destination){
		var url = 'includes/ajax.php?directions=true&mode=transit&origin=' + origin + '&destination=' + destination;

		return $http.get(url)
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
	function getDirections(origin, destination, mode){
		var url = 'includes/ajax.php?directions=true&mode=' + mode + '&origin=' + origin + '&destination=' + destination;

		return $http.get(url)
			.then((res)=>res.data.routes)
			.catch((err)=>console.error(err));
	}
	function getDrivingDirections(origin, destination){
		var url = 'includes/ajax.php?directions=true&mode=driving&origin=' + origin + '&destination=' + destination;

		return $http.get(url)
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
	function getWalkingDirections(origin, destination){
		var url = 'includes/ajax.php?directions=true&mode=walking&origin=' + origin + '&destination=' + destination;

		return $http.get(url)
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
	function reverseGeocode(lat, long){
		var url = 'includes/ajax.php?reverse-geocode=true&latlng=' + lat.toString() + ',' + long.toString();

		return $http.get(url)
			.then((res)=>res.data)
			.catch((err)=>console.error(err));
	}
}