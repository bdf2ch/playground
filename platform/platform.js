/*** ГЛОБАЛЬНЫЙ МОДУЛЬ ПЛАТФОРМЫ ***/
var platform = angular.module("GEARS.Platform", ["Platform.Modules", "Platform.Filters", "Platform.Directives"])
    /* Настройка модуля */
    .config(function($routeProvider, $provide) {
        $provide.factory("Platform", function() {
            var module = {};
            module.partitions = new Collection(); // Коллекция разделов платформы
            return module;
        });
    })
    /* Инициализация модуля */
    .run(function(){

    }
);
