/**
 * Created by avishnikin on 8/9/2016.
 */
'use strict';

// Define the `departmentStaff` module
angular.module('awesome-app.staff').

controller('staffCtrl', function ($scope,$http) {
    $http.get('source/staff.json').success(function(data,status) {
        $scope.status = status;
        $scope.employees = data;
        //$scope.
    }).
    error(function(data,status) {
        $scope.employees = data || "Request failed";
        $scope.status = status;
    });
        /*var self = this;
         $http.get('staff/staff.json').then(function(response) {
         $scope.employees = response;
         });
         */
        //var self = this;
    /*$scope.employees = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];*/
        //$http.get('staff.txt').then(function(response) {
          //  $scope.employees = response;
        //});
        //$scope.employees = employees;
});
