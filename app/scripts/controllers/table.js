angular.module('jtbdApp')
  .controller('TableCtrl', [ '$scope', 'productListService', 'jtbdListService', function ( $scope, productListService, jtbdListService ) {
    $scope.tableLocation = true;
    $scope.editLocation = $scope.mainLocation = false;
    
	//set rows to be grouped by product sorted by priority
	var jtbdList = jtbdListService.all();
	
	var jtbdListGrouped = _.groupBy( jtbdList, 'product' );
										
	$scope.rows = jtbdListGrouped;
  }]);
