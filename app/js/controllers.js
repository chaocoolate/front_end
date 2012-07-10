'use strict';

/* Controllers */


function HomeCtrl($scope, $location) {
	$scope.$watch($location, function() {
		console.log(1);
	});
}
HomeCtrl.$inject = ['$scope', '$location'];

function ExploreCtrl($scope, $location) {
	$scope.$watch($location, function() {
		console.log(2);
	});
}
ExploreCtrl.$inject = ['$scope', '$location'];