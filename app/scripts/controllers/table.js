'use strict';

/**
 * @ngdoc function
 * @name jtbdApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * # Arranges data in a way useful to the table display
 * Controller of the jtbdApp
 */
angular.module('jtbdApp')
  .controller('TableCtrl', [
	'$scope', 
    'productsListService', 
    'jtbdListService', 
    function ( $scope, productsListService, jtbdListService ) {
    $scope.tableLocation = true;
    $scope.editLocation = $scope.mainLocation = false;
    $scope.rows = [
        ['cell1', 'cell2', 'cell3', 'cell4', 'cell5'],
        ['cell6', 'cell7', 'cell8', 'cell9', 'cell10'],
        ['cell11', 'cell12', 'cell13', 'cell14', 'cell15'],
        ['cell16', 'cell17', 'cell18', 'cell19', 'cell20'],
    ];
  }]);
