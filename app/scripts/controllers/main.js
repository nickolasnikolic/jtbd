'use strict';

/**
 * @ngdoc function
 * @name jtbdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jtbdApp
 */
angular.module('jtbdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mainLocation = true;
    $scope.editLocation = $scope.tableLocation = false;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
        "just another list item"
    ];
  });
