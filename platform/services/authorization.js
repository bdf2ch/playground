/*** Модуль авторизации пользователя ***/
'use strict';

var Authorization = angular.module("Authorization", ["Monitoring"])
    .config(function($provide){
        $provide.factory("Authorization", function(){
            var service = {};

            service.version = "0.1"; // Версия модуля
            service.title = "Authorization"; // Наименование модуля

            return service;
        });
    })
    .run(function(Authorization, SystemMonitor){
        SystemMonitor.addMessage("Module loaded: '" + Authorization.title + "' (v " + Authorization.version + ")");
    });
