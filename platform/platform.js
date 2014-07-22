/*** ГЛОБАЛЬНЫЙ МОДУЛЬ ПЛАТФОРМЫ ***/
var platform = angular.module("GEARS.Platform", ["Platform.Services"])
    /* Настройка модуля */
    .config(function($routeProvider, $provide) {
        $provide.factory("Platform", function() {
            var service = {};

            /* Разделы платформы */
            service.partitions = new Collection(); // Коллекция разделов платформы
            angular.forEach(service.partitions.items, function(partition, key) {
                $routeProvider.when(partition.url, {templateUrl: partition.template, controller: partition.controller});
            });
            $routeProvider.when('/', {redirectTo: '/'});
            $routeProvider.otherwise({redirectTo: '/'});

            return service;
        });



    })
    /* Инициализация модуля */
    .run(function(SystemMonitor){
        SystemMonitor.addMessage("Platform loaded successfully");


    });
