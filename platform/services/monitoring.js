/*** Модуль мониторинга, ведения логов и статистики ***/
'use strict';

var monitoring = angular.module("Monitoring", [])
    .config(function($provide){
        /* Настройка модуля */
        $provide.factory("SystemMonitor", function(){
            var service = {};

            service.version = "0.1"; // Версия модуля
            service.title = "System monitor"; // Наименование модуля
            service.messages = []; // Стек сообщений

            // Добавляет сообщение в стек сообщение
            service.addMessage = function(msg){
                if(msg){
                    var length = service.messages.push(new moment().format("DD.MM.YYYY HH:mm") + " - " + msg);
                    console.log(service.messages[length - 1]);
                }
            };

            // Показывает все сообщения в стеке
            service.showAll = function(){
                angular.forEach(service.messages, function(message){
                    console.log(message);
                });
            };

            return service;
        });

    })
    /* Инициализация модуля */
    .run(function(SystemMonitor){
        SystemMonitor.addMessage("Module loaded: '" + SystemMonitor.title + "' (v " + SystemMonitor.version + ")");
    });

