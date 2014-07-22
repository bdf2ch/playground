/*** ГЛОБАЛЬНЫЙ МОДУЛЬ ПРИЛОЖЕНИЯ ***/
var specific = angular.module("GEARS.Specific", ["Specific.Services"])
    .run(function(SystemMonitor){
        SystemMonitor.addMessage("Application loaded successfully");
    });
