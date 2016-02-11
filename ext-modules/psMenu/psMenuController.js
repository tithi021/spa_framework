'use strict',

angular.module('psMenu')
	.controller('psMenuController', ['$scope', '$rootScope',
	 function($scope, $rootScope){

	 	$scope.isVertical = true;

	 	$scope.showMenu = true;
	 	this.getActiveElement = function(){
	 		return $scope.activeElement;
	 	};

		this.setActiveElement = function(el){
			$scope.activeElement = el;
		};

		this.setRoute = function(route){
			$rootScope.$broadcast('ps-menu-item-selected-event', {route: route});
		};

		$scope.toggleMenuOrientation = function(){
			$scope.isVertical = !$scope.isVertical;
		};

		$scope.$on('ps-menu-show', function(evt, data){
			$scope.showMenu = data.show;
		});
	}
])