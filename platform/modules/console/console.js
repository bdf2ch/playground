/*** Модуль мониторинга, ведения логов и статистики ***/
'use strict';

var Console = angular.module("Console", ["ModuleManager"])
    .config(function($provide){
        /* Настройка модуля */
        $provide.factory("Console", function(){
            var module = {};
            /* Информация о модуле */
            module.info = {
                id: "console", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "Консоль", // Наименование модуля
                description: "Системная консоль" // Описание модуля
            };
            module.messages = new Collection(); // Стек сообщений

            /* Добавляет сообщение в стек сообщение */
            module.addMessage = function(msg){
                if(msg){
                    module.messages.addItem(new moment().format("DD.MM.YYYY HH:mm") + " : " + msg);
                }
            };

            /* Показывает все сообщения в стеке */
            module.showAll = function(){
                angular.forEach(module.messages, function(message){
                    console.log(message);
                });
            };

            return module;
        });

    })
    /* Инициализация модуля */
    .run(function(ModuleManager, Console, Platform){
        ModuleManager.registerModule(Console.info); // Регистрация модуля в системе
        Platform.partitions.addItem(new Partition(
            {
                id: Console.info.id,
                title: Console.info.title,
                description: Console.info.description,
                url: "/console",
                icon: "glyphicon glyphicon-cog",
                template: "platform/modules/console/templates/console.html",
                controller: "ConsoleCtrl",
                orderId: 3
            }
        ));
    }
);

Console.controller("ConsoleCtrl", ["$scope", "$rootScope", "Console", function($scope, $rootScope, Console){
    $scope.console = Console;
    $rootScope.$broadcast("setPartition", Console.info.id);
}]);

