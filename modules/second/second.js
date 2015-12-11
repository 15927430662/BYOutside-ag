/**
 * Created by ximing on 2015/12/11.
 */
'use strict';

angular.module('mainApp.secondHouse',[])
    .controller('secondHouseCtrl', ['$scope', 'WCF', function ($scope, CallWcf) {
        $scope.getWcf = "getWcf";
    }]);