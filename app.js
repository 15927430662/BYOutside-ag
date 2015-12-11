/**
 * Created by ximing on 2015/12/11.
 */
'use strict';
//TODO(xm):grunt 根据文件夹名称定义内部同名 js html文件。

angular.module('mainApp', [
    'mainApp.home',
    //'mainApp.newHouse',
    'mainApp.secondHouse',
    //'mainApp.rentHouse',
    //'mainApp.owner',
    //'mainApp.store',
    //'mainApp.map',
    //'mainApp.member',
    'ui.router'
    //'ngAnimate'
])
    .config(
    [          '$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {

            $urlRouterProvider

                .when('', '/')
            //////////////////////////
            // State Configurations //
            //////////////////////////

            // Use $stateProvider to configure your states.
            $stateProvider

                .state("home", {
                    url: "/index",
                    templateUrl: "modules/home/home.html"
                })

                .state('secondHouse', {
                    url: '/second',
                    templateUrl: "modules/second/second.html"
                })

                //.state('secondHouse', {
                //    url: '/secondHouse',
                //    templateUrl: "modules/second/second.html"
                //})
                //
                //.state('secondHouse', {
                //    url: '/secondHouse',
                //    templateUrl: "modules/second/second.html"
                //})
        }
    ]
);