angular.module('jtbdApp')
    .controller('EditCtrl', [ '$scope', 'productListService',  'jtbdListService',  function ( $scope, productListService, jtbdListService ){
        $scope.editLocation = true;
        $scope.mainLocation = $scope.tableLocation = false;
		$scope.jobsDisabled = true;

        $scope.productList = productListService.all();
        $scope.productList.jtbdList = jtbdListService.all();

        $scope.addProduct = function( product ){
			var created = new Product.createProduct( 
				product.title,
				product.description,
				product.priority );
			productListService.add( created );
			$scope.jobsDisabled = !productListService.all().length;
        };
        
        $scope.addJtbd = function( job, productId ){
            
            var created = new JTBD.createJob(
                job.title,
				productId,
                job.description,
                job.type );
            $scope.productList[productId].jtbdList.add( created );
        };
        
        $scope.removeProduct = function( idIndex ){
            $scope.productList.splice( idIndex, 1 );
            productListService.resetList( $scope.productList );
        };
        $scope.removeJob = function( productIndex, jobIndex ){
            $scope.jtbdList.splice( jobIndex, 1 );
        };
  }]);
