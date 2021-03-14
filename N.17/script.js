"use strict";
function volvesForEach(str){
    let arr = str.toLowerCase().split(""), count = 0;
    arr.forEach((el) => {
        const vocabl = ['а', 'е', 'и', 'о', 'у', 'э', 'я', 'ю', 'ы', 'ё'];
        vocabl.forEach( (letter) => {
            if (el == letter){
                count++;
            }
        });
        return count;
    });
    console.log(count);
};
function volvesFilter(str){
    let arr = str.toLowerCase().split("");
    let newArr = arr.filter(el => {
        return (el == "а" || el == "е" || el == "и" || el == "о" || el == "у" || el == "э" || el =="я" || el == "ю" || el == "ы" || el == "ё");
    });
    console.log (newArr.length);
};
function volvesReduce(str){
    let arr = str.toLowerCase().split("");
    console.log(arr.reduce((start, el) => {
       if (el == "а" || el == "е" || el == "и" || el == "о" || el == "у" || el == "э" || el =="я" || el == "ю" || el == "ы" || el == "ё"){
           ++start;
       }
       return start;
    },0));
};


volvesForEach( prompt("Введите строку (Подсчет гласных через forEach)"));
volvesFilter( prompt("Введите строку (Подсчет гласных через filter)"));
volvesReduce( prompt("Введите строку (Подсчет гласных через reduce)"));