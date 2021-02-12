"use strict";
let str = prompt("Введите возможный палиндром");
function checkPalindrom(str) {
    const vocabl = {
        "ъ": "ь",
        " ": "",
        "ё": "е",
        ".": "",
        ",": "",
        "-": "",
        "!": "",
        "?": "",
        '"':"",
        "'": "",
        "(": "",
        ")": ""
    }
    let newStr = "", revers = "";
    outer: for (let i = 0; i < str.length; i++){
        for (let key in vocabl){
            if (key == str[i]){
                newStr += vocabl[key];
                continue outer;
            }
        }
        newStr += str[i]
    }
    newStr = newStr.toLowerCase();
    for (let i = newStr.length - 1; i >= 0; i--){
        revers += newStr[i];
    }
    if (newStr === revers){
        alert ("Палиндром");
    }
    else {
        alert("Не палиндром");
    }
}
checkPalindrom(str);