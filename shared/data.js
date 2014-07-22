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


var Partition = function(parameters){
    this.id = 0;
    this.title = "";
    this.description = "";
    this.icon = "";
    this.template = "";
    this.controller ="";

    if(parameters){
        for(var parameter in parameters){
            if(this.hasOwnProperty(parameter)){
                switch(parameter){
                    default:
                        this[option] = parameters[option];
                        break;
                }
            }
        }
    }
};

