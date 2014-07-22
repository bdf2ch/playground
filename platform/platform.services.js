/***  Модуль сервисов платформы ***/
'use strict';

var platformServices = angular.module("Platform.Services", ["Monitoring", "Authorization"])
    .run(function(SystemMonitor){
        SystemMonitor.addMessage("Platform.Services injected succesfully");
    });
