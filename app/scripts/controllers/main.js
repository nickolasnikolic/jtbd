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
  }]);
