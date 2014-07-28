/****** ГЛОБАЛЬНЫЙ МОДУЛЬ  ******/
'use strict';

var GEARS = angular.module("GEARS", ["ngRoute", "GEARS.Platform", "GEARS.Specific"])
    /* Настройка модуля */
    .config(function($provide, $routeProvider){
        $provide.factory("GEARS", ["Platform", "Specific", function(Platform, Specific){
            var module = {};

            /* Информация о системе */
            module.info = {
                id: "gearsbasic", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "GEARS", // Наименование модуля
                description: "GEARS engine" // Описание модуля
            };

            /* Разделы системы */
            module.partitions = new Collection(); // Коллекция разделов системы
            module.currentPartitionId = ""; // Текущий раздел

            /* Регистрирует разделы системы */
            module.registerPartitions = function(){
                // Регистрация разделов платформы
                angular.forEach(Platform.partitions.items, function(partition) {
                    partition.isSystem = true;
                    module.partitions.addItem(partition);
                });
                /* Регистрация разделов приложения */
                angular.forEach(Specific.partitions.items, function(partition) {
                    module.partitions.addItem(partition);
                });
                /* Регистрация адресов разделов платформы и приложения */
                angular.forEach(module.partitions.items, function(partition) {
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

            return module;
        }]);
    })
    /* Инициализация модуля */
    .run(function(GEARS, ModuleManager){
        ModuleManager.registerModule(GEARS.info); // Регистрация модуля в системе
        GEARS.registerPartitions(); // Регистрация разделов системы

        //console.log(ModuleManager.modules.items);
        console.log(GEARS.partitions.items);
    }
);

/* Контроллер модуля */
GEARS.controller("MenuCtrl", ["$scope", "GEARS", function($scope, GEARS){
    $scope.menu = GEARS.partitions;
}]);

GEARS.controller("GEARSCtrl", ["$scope", "GEARS", "Specific", function($scope, GEARS, Specific){
    $scope.gears = GEARS;
    $scope.application = Specific;
    $scope.$on("setPartition", function(event, partitionId){
        $scope.gears.partitions.findItemById(partitionId).setActive(true);
        angular.forEach($scope.gears.partitions.items, function (partition) {
            if(partition.id != partitionId)
                partition.setActive(false);
        });
    });
}]);