angular
	.module('mainApp')
	.factory('GeoLocationFactory', GeoLocationFactory);

GeoLocationFactory.$inject = [];

// set up the services needed for this factory
function GeoLocationFactory(){

	var service = {
		getLocation: getLocation
	};

	return service;

	////////////////////

	function getLocation(callback) {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(callback);
	    } else {
	    	return {};
	    }
	}
}