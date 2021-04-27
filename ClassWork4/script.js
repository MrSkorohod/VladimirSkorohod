"use strict";
let body = document.querySelector("body");
let nav = document.createElement("ul");

body.appendChild(nav);
nav.setAttribute("class", "nav nav-tabs");

 for (let i = 0; i < 3; i++){
     let list = document.createElement("li");
     let link = document.createElement("a");
     list.setAttribute("class", "nav-item");
     link.setAttribute("class", "nav-link");
     link.setAttribute("href", "#");
     nav.appendChild(list);
     list.appendChild(link);
 }

let arrList = nav.querySelectorAll("a");
 arrList[0].innerText = `HR`;
 arrList[1].innerText = `Наполнение сайта`;
 arrList[2].innerText = `Логистика`;

let divHR = document.createElement("div");
body.appendChild(divHR);

let labelName = document.createElement("label");
let labelSecondName = document.createElement("label");
let inputName = document.createElement("input");
let inputSecondName = document.createElement("input");
labelName.innerText = `1. Имя`;
labelSecondName.innerText = `2. Фамилия`;

labelName.appendChild(inputName);
labelSecondName.appendChild(inputSecondName);
divHR.appendChild(labelName);
divHR.appendChild(labelSecondName);





