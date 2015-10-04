angular.module('jtbdApp')
    .controller('EditCtrl', [ '$scope', 'productListService', function ( $scope, productListService ){
        $scope.editLocation = true;
        $scope.mainLocation = $scope.tableLocation = false;

        //stuff a reference to the productList in local scope
        $scope.productList = productListService.self();

        $scope.addProduct = function( product ){
			var created = new Product.createProduct( 
                                        product.title,
                                        product.description,
                                        product.priority );
			$scope.productList.add( created );

			$scope.jobsDisabled = !$scope.productList.list.length;
        };
        
        $scope.addJtbd = function( job ){

            var created = new JTBD.createJob(
                                            job.title,
                                            job.productId,
                                            job.description,
                                            job.type );

            $scope.productList.addJtbd( created, job.productId );
        };
        
        $scope.removeProduct = function( idIndex ){
            $scope.productList.list.splice( idIndex, 1 );
        };
        $scope.removeJob = function( productIndex, jobIndex ){
            $scope.productList.list[productIndex].jtbdList.splice( jobIndex, 1 );
        };
  }]);
