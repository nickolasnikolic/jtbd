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
    
	//set rows to be grouped by product sorted by priority
    //$scope.rows = productListService.all();
	//var productsList = productListService.all();
	var jtbdList = jtbdListService.all();
	
	var jtbdListGrouped = _.groupBy( jtbdList, 'product' );
										
	$scope.rows = jtbdListGrouped;
  }]);
