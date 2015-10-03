'use strict';

/**
 * @ngdoc function
 * @name jtbdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jtbdApp
 */
angular.module('jtbdApp')
  .controller('MainCtrl', [ 
	'$scope',
    'productListService', 
    'jtbdListService', 
    function (
			$scope, 
			 productListService, 
			 jtbdListService 
			) {
    $scope.mainLocation = true;
    $scope.editLocation = $scope.tableLocation = false;
    //actual data            
    $scope.productsList = productListService.all();
    $scope.jobsList = jtbdListService.all();
    
    angular.element( document ).ready(function(){
        //anything that needs to run at app start
    });
  }]);
