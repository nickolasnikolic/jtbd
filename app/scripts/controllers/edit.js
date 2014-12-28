'use strict';

/**
 * @ngdoc function
 * @name jtbdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jtbdApp
 */
angular.module('jtbdApp')
  .controller('EditCtrl', function ($scope) {
    $scope.editLocation = true;
    $scope.mainLocation = $scope.tableLocation = false;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
