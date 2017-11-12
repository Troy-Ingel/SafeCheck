angular
.module('mainApp')
.controller('homeController', homeController);

homeController.$inject = ['GoogleMapsFactory'];

function homeController(GoogleMapsFactory){
	GoogleMapsFactory.getWalkingDirections('210 glenn drive stratford', 'boston ma').then(function(response){
		console.log(response)
	});
}