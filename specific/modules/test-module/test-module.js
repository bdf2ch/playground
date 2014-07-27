/*** Тестовый модуль ***/
"use strict";

var testModule = angular.module("TestModule", ["GEARS.Specific"])
    /* Настройка модуля */
    .config(function($provide){
        $provide.factory("TestModule", function(){
            var module = {};
            /* Информация о модуле */
            module.info = {
                id: "testmodule", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "Тестовый модуль", // Наименование модуля
                description: "тестовый модуль приложения"  // Описание модуля
            };
            return module;
        });
    })
    /* Инициализация модуля */
    .run(function(TestModule, ModuleManager, Specific){
        ModuleManager.registerModule(TestModule.info);
        /* Раздел управления модулями */
        Specific.partitions.addItem(new Partition(
            {
                id: "testmodule",
                title: "Тестовый модуль",
                description: "Тестовый модуль системы",
                url: "/test",
                icon: "glyphicon glyphicon-cog",
                template: "specific/modules/test-module/templates/testModule.html",
                controller: "TestCtrl"
            }
        ));
    }
);

testModule.controller("TestCtrl", ["$scope", "$rootScope", "TestModule", function($scope, $rootScope, TestModule){
    $scope.test = "test message";
    $rootScope.$broadcast("setPartition", TestModule.info.id);
}]);
