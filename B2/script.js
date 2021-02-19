"use strict";
function reversStr(str){
  str = str.split("").reverse().join("");
  console.log(str);
  return str 
}
reversStr(prompt("Введите строку"));