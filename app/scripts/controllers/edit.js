'use strict';

/**
 * @ngdoc function
 * @name jtbdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jtbdApp
 */
angular.module('jtbdApp')
    .controller('EditCtrl', [
		'$scope',
        'productFactory', 
        'jtbdFactory', 
        'productListService', 
        'jtbdListService', 
        function ( $scope, productFactory, jtbdFactory, productListService, jtbdListService ) {
        $scope.editLocation = true;
        $scope.mainLocation = $scope.tableLocation = false;

        $scope.productList = productListService.all();
        $scope.jtbdList = jtbdListService.all();

        $scope.addProduct = function( product ){
            productFactory.add( product );
        };
        
        $scope.addJtbd = function( job ){
            jtbdFactory.add( job );
        };
  }]);
