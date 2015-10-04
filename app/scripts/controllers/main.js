angular.module('jtbdApp')
  .controller('MainCtrl', [ 
	'$scope',
    'productListService',
    function ( $scope) {
    $scope.mainLocation = true;
    $scope.editLocation = $scope.tableLocation = false;
  }]);
