'use strict';

/**
 * @ngdoc function
 * @name frontendTestAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendTestAppApp
 */
angular.module('frontendTestAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
