/*** Базовые типы данных ***/
"use strict";

var Collection = function(){

    this.items = []; // Массив элементов коллекции
    this.isLoaded = false;

    /* Добавляет элемент в коллекцию */
    Collection.prototype.addItem = function(item){
        if(item && item != null){
            this.items.push(item);
        }
    };

    /* Удаляет элемент из коллекции */
    Collection.prototype.deleteItem = function(id){
        if(id){
            for(var i = 0; i < this.items.length; i++){
                if(this.items[i].id == id)
                    this.items.splice(i, 1);
            }
        }
    };

    /* Находит элемент в коллекции по идентификатору */
    Collection.prototype.findItemById = function(id){
        var trigger = 0;
        for(var i = 0; i < this.items.length; i++){
            if(this.items[i].id == id){
                trigger++;
                return this.items[i];
            }
        }
        if(trigger == 0)
            return false;
    };

    /* Находит элемент по значению одного из полей */
    Collection.prototype.findItemByField = function(field, value){
        //var trigger = 0;
        for(var i = 0; i < this.items.length; i++){
            if(this.items[i].hasOwnProperty(field) && this.items[i][field] == value){
                //trigger++;
                return this.items[i];
            }
        }
        //if(trigger == 0)
        return false;
    };

    /* Возвращает количество элементов в коллекции */
    Collection.prototype.length = function(){
        return this.items.length;
    };

    /* Удаляет все элементы из коллекции */
    Collection.prototype.clear = function(){
        this.items.splice(0, this.items.length);
    };

    /* Возвращает массив с элементами коллекции */
    Collection.prototype.asArray = function(){
        return this.items;
    };

};

/***** Класс, описывающий раздел *****/
var Partition = function(parameters){
    this.id = 0;           // Идентификатор раздела
    this.title = "";       // Наименование раздела
    this.description = ""; // Описание раздела
    this.url = "",         // URL раздела
    this.icon = "";        // Иконка раздела
    this.template = "";    // Путь к шаблону
    this.controller = "";  // Контроллер раздела
    this.orderId = 0;      // Порядковый номер для сортировки
    this.isActive = false; // Является ли раздел активным
    this.isSystem = false; // Является ли раздел системным

    /* Конструктор, инициализация объекта */
    if(parameters){
        for(var parameter in parameters){
            if(this.hasOwnProperty(parameter)){
                switch(parameter){
                    default:
                        this[parameter] = parameters[parameter];
                        break;
                }
            }
        }
    }

    /* Делает раздел активным / неактивным */
    Partition.prototype.setActive = function(flag){
        this.isActive = flag;
    };
};



/***** Класс, описывающий модуль системы *****/
var Module = function(parameters){
    this.id = 0;           // Идентификатор модуля
    this.version = "0.0";  // Версия модуля
    this.title = "";       // Наименование модуля
    this.description = ""; // Описание модуля/
    //this.partition = "";

    /* Конструктор, инициализация модуля */
    if(parameters){
        for(var parameter in parameters){
            if(this.hasOwnProperty(parameter)){
                switch(parameter){
                    default:
                        this[parameter] = parameters[parameter];
                        break;
                }
            }
        }
    }

};



/***** Класс, описывающий пользователя *****/
var User = function(parameters){
    this.id = 0;          // Идентификатор пользователя
    this.name = "";       // Имя пользователя
    this.fname = "";      // Отчество пользователя
    this.surname = "";    // Фамилия пользователя
    this.fio = "";        // Фамилия, имя, отчество пользователя одной строкой
    this.email = "";      // E-mail пользователя
    this.isAdmin = false; // Является ли администратором

    /* Конструктор, инициализация модуля */
    if(parameters){
        for(var parameter in parameters){
            if(this.hasOwnProperty(parameter)){
                switch(parameter){
                    default:
                        this[parameter] = parameters[parameter];
                        break;
                }
            }
        }
    }

};


