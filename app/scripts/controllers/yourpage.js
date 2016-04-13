'use strict';

/**
 * @ngdoc function
 * @name frontendTestAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendTestAppApp
 */
angular.module('frontendTestAppApp')
  .controller('YourPageCtrl', function ($scope,data) {
    angular.forEach(data,function(value, key) {
    	var diff = Date.now() - new Date(value['FOUNDED DATE']);
    	var age = new Date(diff);
    	var tempAge= Math.abs(age.getUTCFullYear() - 1970); 
    	var tempRange=Math.floor(tempAge/3);
    	var startRange=tempRange*3;
    	var endRange=startRange+2;
    	value['Age']=startRange+ ' - '+endRange;

    	var empNo=value['NUM EMPLOYEES'];
    	tempRange=Math.floor(empNo/100);
    	startRange=tempRange*100;
    	endRange=startRange+99;
    	value['EmployeeNo']=startRange+ ' - '+endRange;

    	var revenue=value['REVENUE'];
    	tempRange=Math.floor(revenue/10000000);
    	startRange=tempRange*10000000;
    	endRange=startRange+9999999;
    	value['REVENUE']=startRange+ ' - '+endRange;
    },this);

    $scope.data=data;
    $scope.filters = { };
    console.log($scope.filters);
  });
