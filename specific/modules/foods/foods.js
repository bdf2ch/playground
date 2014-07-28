/*** Тестовый модуль ***/
"use strict";

var foods = angular.module("Foods", ["GEARS.Specific"])
    /* Настройка модуля */
    .config(function($provide){
        $provide.factory("Foods", function(){
            var module = {};
            /* Информация о модуле */
            module.info = {
                id: "foods", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "Продукты", // Наименование модуля
                description: "Продукты и их пищевая ценность"  // Описание модуля
            };
            return module;
        });
    })
    /* Инициализация модуля */
    .run(function(Foods, ModuleManager, Specific){
        ModuleManager.registerModule(Foods.info);
        /* Раздел управления модулями */
        Specific.partitions.addItem(new Partition(
            {
                id: "foods",
                title: "Продукты",
                description: "Продукты и их пищевая ценность",
                url: "/foods",
                icon: "glyphicon glyphicon-cog",
                template: "specific/modules/foods/templates/foods.html",
                controller: "FoodsCtrl",
                orderId: 1
            }
        ));
    }
);

foods.controller("FoodsCtrl", ["$scope", "$rootScope", "Foods", function($scope, $rootScope, Foods){
    $scope.test = "test message";
    $rootScope.$broadcast("setPartition", Foods.info.id);
}]);
