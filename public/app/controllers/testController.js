angular
	.module('mainApp')
	.controller('testController', testController);

testController.$inject = ['$scope', '$location'];

function testController($scope, $location){


	activate();

	///////////

	function activate(){
		$scope.message = "can you hear me world.";
	}
}