/*** Модуль мониторинга, ведения логов и статистики ***/
'use strict';

var monitoring = angular.module("Monitoring", ["ModuleManager"])
    .config(function($provide){
        /* Настройка модуля */
        $provide.factory("SystemMonitor", function(){
            var module = {};
            /* Информация о модуле */
            module.info = {
                id: "monitoring", // Идентификатор модуля
                version: "0.1", // Версия модуля
                title: "Консоль", // Наименование модуля
                description: "Provide modules monitoring, logging and stats" // Описание модуля
            };

            module.messages = []; // Стек сообщений

            /* Добавляет сообщение в стек сообщение */
            module.addMessage = function(msg){
                if(msg){
                    var length = module.messages.push(new moment().format("DD.MM.YYYY HH:mm") + " - " + msg);
                    console.log(module.messages[length - 1]);
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
    .run(function(ModuleManager, SystemMonitor){
        ModuleManager.registerModule(SystemMonitor.info); // Регистрация модуля в системе
    }
);

