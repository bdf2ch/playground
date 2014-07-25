

/****** ГЛОБАЛЬНЫЙ МОДУЛЬ  ******/
'use strict';

var GEARS = angular.module("GEARS", ["ngRoute", "GEARS.Platform", "GEARS.Specific"])
    /* Настройка модуля */
    .config(function($provide, $routeProvider){
        $provide.factory("GEARSBasic", ["Platform", "Specific", function(GEARSPlatform, GEARSSpecific){
            var service = {};

            // Информация о модуле
            service.module = {
                id: "gearsbasic", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "GEARS Basic", // Наименование модуля
                description: "GEARS Basic module, engine" // Описание модуля
            };

            /* Разделы системы */
            service.partitions = new Collection(); // Коллекция разделов системы
            service.currentPartitionId = ""; // Текущий раздел

            // Регистрирует разделы системы
            service.registerPartitions = function(){
                // Регистрация разделов платформы
                angular.forEach(GEARSPlatform.partitions.items, function(partition, key) {
                    service.partitions.addItem(partition);
                });
                // Регистрация разделов приложения
                angular.forEach(GEARSSpecific.partitions.items, function(partition, key) {
                    service.partitions.addItem(partition);
                });

                angular.forEach(service.partitions.items, function(partition, key) {
                    $routeProvider.when(partition.url,
                        {
                            templateUrl: partition.template,
                            controller: partition.controller
                        }
                    );
                });
                $routeProvider.when('/', {redirectTo: '/'});
                $routeProvider.otherwise({redirectTo: '/'});
            };

            return service;
        }]);
    })
    /* Инициализация модуля */
    .run(function(ModuleManager, GEARSBasic, SystemMonitor){
        ModuleManager.registerModule(GEARSBasic.module); // Регистрация модуля в системе
        GEARSBasic.registerPartitions(); // Регистрация разделов системы
        console.log(ModuleManager.modules.items);
        console.log(GEARSBasic.partitions.items);
    });

/* Контроллер модуля */
GEARS.controller("GEARSCtrl", ["$scope", "GEARSBasic", "Specific", function($scope, GEARSBasic, Specific){
    $scope.gears = GEARSBasic;
    $scope.application = Specific;


}]);