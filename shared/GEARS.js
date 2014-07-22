/****** ГЛОБАЛЬНЫЙ МОДУЛЬ  ******/
'use strict';

var GEARS = angular.module("GEARS", ["ngRoute", "GEARS.Platform", "GEARS.Specific"])
    /* Настройка модуля */
    .config(function($provide){
        $provide.factory("GEARSBasic", function(){
            var service = {};

            service.version = "0.1"; // Версия модуля
            service.title = "GEARS Basic"; // Наименование модуля
            service.description = "GEARS Basic module, engine";
            service.modules = new Collection();
            //service.partitions = new Collection();



            return service;
        });
    })
    /* Инициализация модуля */
    .run(function(GEARSBasic, SystemMonitor){
        SystemMonitor.addMessage("Module loaded: '" + GEARSBasic.title + "' (v " + GEARSBasic.version + ")");
        GEARSBasic.modules.addItem(new Module({
            id: 1,
            version: GEARSBasic.version,
            title: GEARSBasic.title,
            description: GEARSBasic.description
        }));
        console.log(GEARSBasic.modules.items);
    });