"use strict";
function vowels(str){
  let newStr = str.toLowerCase();
  const vocabl = ['а', 'е', 'и', 'о', 'у', 'э', 'я', 'ю', 'ы', 'ё'];
  let count = 0;
  const obj = {};
  for (let i of str) {
    if (vocabl.indexOf(i) !== -1) {
      if (obj[i]) {
        obj[i]++;
      } else {
        obj[i] = 1;
      }
    }
  }
  for (let key in obj) {
    count += obj[key];
  }
  console.log(count);
}
vowels(prompt("Введите строку:"));