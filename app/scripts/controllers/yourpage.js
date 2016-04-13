'use strict';

/**
 * @ngdoc function
 * @name frontendTestAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendTestAppApp
 */
angular.module('frontendTestAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
