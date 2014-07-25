/*** ГЛОБАЛЬНЫЙ МОДУЛЬ ПРИЛОЖЕНИЯ ***/
var specific = angular.module("GEARS.Specific", ["Specific.Services"])
    /* Настройка модуля */
    .config(function($provide){
        $provide.factory("Specific", function(){
            var service = {};

            service.info = {
                title: "Test Application",
                domain: "www.testapp.com"
            };

            /* Разделы приложения */
            service.partitions = new Collection();
            // Тестовый раздел
            service.partitions.addItem(new Partition(
                {
                    id: "specifictest",
                    title: "Тестовый модуль",
                    description: "Тестовый модуль приложения blah blah blah blah blah",
                    url: "/test",
                    icon: "",
                    template: "specific/templates/test.html",
                    controller: "TestCtrl"
                }
            ));

            return service;
        })
    })
    /* Инициализация модуля */
    .run(function(){

    });

specific.controller("TestCtrl", ["$scope", "Specific", "GEARSBasic", function($scope, Specific, GEARSBasic){
    $scope.application = Specific;
    $scope.gears = GEARSBasic;
    $scope.gears.currentPartitionId = "specifictest"; // Идентификатор связанного раздела
}]);
