/*** Модуль авторизации пользователя ***/
'use strict';

var Authorization = angular.module("Authorization", ["Monitoring"])
    /* Настройка модуля */
    .config(function($provide){
        $provide.factory("Authorization", function(){
            var service = {};

            // Информация о модуле
            service.module = {
                id: "authorization", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "Authorization", // Наименование модуля
                description: "Provides authorization. user roles and data access control" // Описание модуля
            };

            return service;
        });
    })
    /* Инициализация модуля */
    .run(function(ModuleManager, Authorization, SystemMonitor){
        ModuleManager.registerModule(Authorization.module); // Регистрация модуля в системе
    });
