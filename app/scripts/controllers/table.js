angular.module('jtbdApp')
  .controller('TableCtrl', [ '$scope', 'productListService', function ( $scope, productListService ) {
    $scope.tableLocation = true;
    $scope.editLocation = $scope.mainLocation = false;
    
	//set rows to be grouped by product sorted by priority
	var products = productListService.list;

    $scope.rows = _.chain(products)
                    .pluck( 'jtbdList')
                    .flatten()
                    .value();

      console.log($scope.rows);
  }]);
