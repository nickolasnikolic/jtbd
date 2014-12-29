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
        'productListService', 
        'jtbdListService', 
        function ( 
				$scope, 
				 productListService, 
				 jtbdListService 
				){
        $scope.editLocation = true;
        $scope.mainLocation = $scope.tableLocation = false;
		$scope.jobsDisabled = true;

        $scope.productList = productListService.all();
        $scope.jtbdList = jtbdListService.all();

        $scope.addProduct = function( product ){
			var created = Product.createProduct( 
				product.title,
				product.description,
				product.priority,
				[] );
			productListService.add( created );
			$scope.jobsDisabled = !productListService.all().length;
			$scope.$apply();
        };
					
        $scope.addJtbd = function( job ){
            jtbdFactory.add( job );
        };
  }]);
