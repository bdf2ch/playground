/*** Менеджер модулей ***/
"use strict";

var moduleManager = angular.module("ModuleManager", ["Console"])
    /* Насторойка модуля */
    .config(function($provide){
        $provide.factory("ModuleManager", ["Console", "Platform", function(Console){
            var module = {};
            /* Информация о модуле */
            module.info = {
                id: "modulemanager", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "Менеджер модулей", // Наименование модуля
                description: "Менеджер модулей системы"  // Описание модуля
            };
            module.modules = new Collection(); // Стек модулей

            /* Регистрирует модуль в системе */
            module.registerModule = function(info){
                if(info){
                    module.modules.addItem(new Module(info));
                    Console.addMessage("Модуль '" + info.title + "' загружен [версия " + info.version + "]");
                }
            };

            return module;
        }])
    })
    /* Инициализация модуля */
    .run(function(ModuleManager, Platform){
        ModuleManager.registerModule(ModuleManager.info); // Регистрация модуля в системе
        /* Раздел управления модулями */
        Platform.partitions.addItem(new Partition(
            {
                id: ModuleManager.info.id,
                title: ModuleManager.info.title,
                description: ModuleManager.info.description,
                url: "/modules",
                icon: "glyphicon glyphicon-cog",
                template: "platform/modules/module-manager/templates/modulesManager.html",
                controller: "ModuleManagerCtrl",
                orderId: 2
            }
        ));
    });


/* Контроллер модуля */
moduleManager.controller("ModuleManagerCtrl", ["$scope", "$rootScope", "ModuleManager", "GEARS", function($scope, $rootScope, ModuleManager){
    $scope.module = ModuleManager; // Доступ к модулю
    $rootScope.$broadcast("setPartition", ModuleManager.info.id);
}]);




