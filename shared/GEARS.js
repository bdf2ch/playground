/****** ГЛОБАЛЬНЫЙ МОДУЛЬ  ******/
'use strict';

var GEARS = angular.module("GEARS", ["ngRoute", "GEARS.Platform", "GEARS.Specific"])
    /* Настройка модуля */
    .config(function($provide){
        $provide.factory("GEARSBasic", function(){
            var service = {};

            service.version = "0.1"; // Версия модуля
            service.title = "GEARS Basic"; // Наименование модуля
            service.partitions = new Collection();


            return service;
        });
    })
    /* Инициализация модуля */
    .run(function(GEARSBasic, SystemMonitor){
        SystemMonitor.addMessage("Module loaded: '" + GEARSBasic.title + "' (v " + GEARSBasic.version + ")");
    });