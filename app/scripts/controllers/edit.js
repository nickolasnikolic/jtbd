angular.module('jtbdApp')
    .controller('EditCtrl', [ '$scope', 'productListService',  'jtbdListService',  function ( $scope, productListService, jtbdListService ){
        $scope.editLocation = true;
        $scope.mainLocation = $scope.tableLocation = false;
		$scope.jobsDisabled = true;

        $scope.productList = productListService.self();
        $scope.productList.jtbdList = jtbdListService.all();

        $scope.addProduct = function( product ){
			var created = new Product.createProduct( 
				product.title,
				product.description,
				product.priority );
			$scope.productList.add( created );

			$scope.jobsDisabled = !$scope.productList.list.length;
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
            $scope.productList.list.splice( idIndex, 1 );
            productListService.resetList( $scope.productList );
        };
        $scope.removeJob = function( productIndex, jobIndex ){
            $scope.productList[productIndex].jtbdList.splice( jobIndex, 1 );
        };
  }]);
