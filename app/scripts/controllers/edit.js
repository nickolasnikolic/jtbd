'use strict';
var devMode = true;
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
			var created = new Product.createProduct( 
				product.title,
				product.description,
				product.priority//,
				/*[]*/ );
			productListService.add( created );
			$scope.jobsDisabled = !productListService.all().length;
			//$scope.$apply();
        };
        
        //dummy data
        if( devMode ){
            for(var i = 0; i<= 30; i++){
                productListService.add( new Product.createProduct(
                    "title: " + Math.floor( i * Math.random() ),
                    "description: " + Math.floor( i * Math.random() ),
                    "priority: " + Math.floor( i % 11 * Math.random() ),
                    []
                ) );
            }
			
			var queryList = productListService.all();
            $scope.jobsDisabled = !productListService.all().length;
            
            for(var i = 0; i<= 30; i++){
                jtbdListService.add( new JTBD.createJob(
                    "title: " + Math.floor( i * Math.random() ),
					"product: " + queryList[ Math.floor( i*Math.random() ) ],
                    "description: " + Math.floor( i * Math.random() ),
                    "priority: " + Math.floor( i % 3 * Math.random() ),
                    []
                ) );
            }
        }
        
        $scope.addJtbd = function( job ){
            
            var created = new JTBD.createJob(
                job.title,
				job.productId,
                job.description,
                job.type//,
                /*[]*/ );
            jtbdListService.add( created );
            //$scope.$apply();
        };
        
        $scope.removeProduct = function( idIndex ){
            $scope.productList.splice( idIndex, 1 );
            productListService.resetList( $scope.productList );
        };
        $scope.removeJob = function( idIndex ){
            $scope.jtbdList.splice( idIndex, 1 );
            jtbdListService.resetList( $scope.jtbdList );
        };
  }]);
