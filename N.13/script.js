"use strict";
function HashStorageFunc(){
    this.addValue = function (key, value){
        this[key] = value;
    }
    this.getValue = function (key){
        return this[key];
    }
    this.deletValue = function (key){
        if ( key in this){
            delete this[key];
            return true;
        }
        else {
            return false;
        }
    }
    this.getKeys = function (){
        let arr = [];
        for (let key in this){
            if (typeof this[key] == "function"){
                continue;
            }else{
                arr.push(`${key}`);
            }
        }
        return arr;
    }
}
const drinkStorage = new HashStorageFunc();

const enterData = document.querySelector("#enterData");
const name = document.querySelector("#name");
const enterName = document.querySelector("#enterName");
const alcohol = document.querySelector("#alcohol");
const enterAlcohol = document.querySelector("#enterAlcohol");
const recipe = document.querySelector("#recipe");
const enterRecipe = document.querySelector("#enterRecipe");
const getCoctail = document.querySelector("#getCoctail");
const nameCoctail = document.querySelector("#nameCoctail");
const getInfo = document.querySelector("#getInfo");
const del = document.querySelector("#del");
const enterForDel = document.querySelector("#enterForDel");
const exampleModalLabel = document.querySelector("#exampleModalLabel");

enterData.addEventListener("click", function(){
        if (! (enterName.value in drinkStorage)){
            if (enterAlcohol.value == "" || enterRecipe.value == ""){
                exampleModalLabel.innerHTML = `Заполнены не все поля`;
            }else {
            drinkStorage.addValue(enterName.value, {
                "Алкогольное": enterAlcohol.value,
                "Рецепт": enterRecipe.value
            })
                exampleModalLabel.innerHTML = `Напиток ${enterName.value} успешно добавлен`;
                enterName.value = "";
                enterAlcohol.value = "";
                enterRecipe.value = "";
            }
        }else {
            exampleModalLabel.innerHTML = `Напиток ${enterName.value} уже существет в хранилище`;
            enterName.value = "";
            enterAlcohol.value = "";
            enterRecipe.value = "";
        }

    }
);

getCoctail.addEventListener("click", function(){
    if (drinkStorage.getKeys().length === 0){
        exampleModalLabel.innerHTML = `Хранилище напитков пустое`;
    }
    else{
        exampleModalLabel.innerHTML = `Список напитков: ${drinkStorage.getKeys()}`;
    }
});

getInfo.addEventListener("click", function(){
    if (nameCoctail.value in drinkStorage){
    let str = "";
    for (let key in drinkStorage.getValue (nameCoctail.value)){
        str += key + ": " + drinkStorage.getValue (nameCoctail.value)[key] + "\n";
    }
    exampleModalLabel.innerHTML = `${str}`;
    }
    else {
        exampleModalLabel.innerHTML = `Напитка ${nameCoctail.value} не существует в хранилище`;
    }
});

del.addEventListener("click", function(){
    if (drinkStorage.deletValue(enterForDel.value)){
        exampleModalLabel.innerHTML = `Напиток ${enterForDel.value} успешно удален`;
    }else {
        exampleModalLabel.innerHTML = `Напитка ${enterForDel.value} не существует в хранилище`;
    }
});

