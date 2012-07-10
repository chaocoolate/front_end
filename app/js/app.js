'use strict';


// Declare app level module which depends on filters, and services
angular.module('chaocoolate', ['chaocoolate.filters', 'chaocoolate.services', 'chaocoolate.directives']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'partials/home.html',
		controller: HomeCtrl
	});
	$routeProvider.when('/books/explore', {
		templateUrl: 'partials/explore.html',
		controller: ExploreCtrl
	});
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);