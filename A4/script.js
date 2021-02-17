"use strict";
function checkPalindrome(str) {
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
        ")": "",
        "—": ""
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
    function check(str){
        if(str.length === 1) {
            return alert("Палиндром");
        }
        if(str.length === 2) {
            return str[0] === str[1];
        }
        if(str[0] === str.slice(-1)) {
            return check(str.slice(1,-1))
        }
            return alert("Не палиндром");

    }
    check(newStr);
}
checkPalindrome(prompt("Введите возможный палиндром"));