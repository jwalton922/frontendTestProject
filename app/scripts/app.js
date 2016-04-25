'use strict';

/**
 * @ngdoc overview
 * @name frontendTestAppApp
 * @description
 * # frontendTestAppApp
 *
 * Main module of the application.
 */
angular
  .module('frontendTestAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/yourpage', {
        templateUrl: 'views/yourpage.html',
        controller: 'YourPageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
