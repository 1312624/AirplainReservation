"use strict";

(function($){
	let app = angular.module('myApp');

	app.controller('flightDetailController', function($scope, $timeout, $http){
		$http.get('http://localhost:3000/api/flight-details').success( function(response) {
			$timeout(function() {
				$scope.listFlightDetails = response;
			});
		});
	})
}(jQuery));