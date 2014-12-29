'use strict';

/**
 * @ngdoc function
 * @name jtbdApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * # Arranges data in a way useful to the table display
 * Controller of the jtbdApp
 */
angular.module('jtbdApp')
  .controller('TableCtrl', [
							'$scope', 
							'productListService', 
							'jtbdListService', 
							function ( 
									$scope, 
									 productListService, 
									 jtbdListService 
									) {
    $scope.tableLocation = true;
    $scope.editLocation = $scope.mainLocation = false;
    
    $scope.rows = productListService.all();
  }]);
