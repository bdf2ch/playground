/*** ГЛОБАЛЬНЫЙ МОДУЛЬ ПРИЛОЖЕНИЯ ***/
var specific = angular.module("GEARS.Specific", ["Specific.Modules", "Specific.Filters", "Specific.Directives"])
    /* Настройка модуля */
    .config(function($provide){
        $provide.factory("Specific", function(){
            var module = {};

            /* Информация о приложении */
            module.info = {
                title: "Test Application",
                domain: "www.testapp.com"
            };
            module.partitions = new Collection(); // Разделы приложения

            return module;
        })
    })
    /* Инициализация модуля */
    .run(function(){

    });
