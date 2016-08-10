/**
 * Created by avishnikin on 8/9/2016.
 */
'use strict';

angular.
    module('awesome-app.staff',['ui.router']).
        config(function config($stateProvider) {
            $stateProvider
                .state('staff', {
                    url: '^/staff',
                    controller: 'staffCtrl',
                    templateUrl: 'staff/staff.tpl.html'
                    //controller: 'staffCtrl'
                    
                });
        });

    /*component('staff', {
        templateUrl: 'staff/staff.tpl.html',
        controller: ['$http',
            function DepartmentsStaffController($http) {
            var self = this;
            //self.orderProp = 'age';

            $http.get('src/staff.json').then(function(response) {
                self.staff = response.data;
            });
            }
        ]
    });*/