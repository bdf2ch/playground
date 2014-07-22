/***  Модуль сервисов приложения ***/
var specificServices = angular.module("Specific.Services", [])
    .run(function(SystemMonitor){
        SystemMonitor.addMessage("Application.Services loaded successfully");
    });