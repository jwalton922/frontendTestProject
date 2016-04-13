'use strict';

angular.module('frontendTestAppApp')
  .service('YourPageService', function ($q,$log,$http) {
    return {
    getData: function() {
      var dfd = $q.defer()

      setTimeout(function() {
          $http.get('https://rawgit.com/jwalton922/frontendTestProject/master/FrontEndTestData.json').success(function(response) 
          {
            $log.log(response)
            dfd.resolve(response)
          })
    }, 500)
      $log.log(dfd.promise)
      return dfd.promise
    }
  }
  });