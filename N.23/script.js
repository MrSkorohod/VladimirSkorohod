"use strict";
let body = document.querySelector("body");
let button1 = document.querySelector("#formDef1");
let button2 = document.querySelector("#formDef2");
var formDef1 =
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {label:'Опубликовать:',kind:'submit'},
    ];
var formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {label:'Зарегистрироваться:',kind:'submit'},
    ];





function addForms(arr) {
    let form = document.createElement("form");
    body.appendChild(form);
    form.style.borderBottom = `2px solid black`;
    form.style.padding= `15px`;
    form.action = `https://fe.it-academy.by/TestForm.php`;
    for (let elem of arr) {
        let label = document.createElement(`label`);
        form.appendChild(label);
        label.style.display = `block`;
        label.style.marginBottom = `6px`;
        label.innerText = `${elem[`label`]}`;
        let input = document.createElement(`input`);
        let select = document.createElement(`select`);
        switch (elem[`kind`]) {
            case `longtext`:
                input.type = `text`;
                input.name = elem[`name`];
                input.style.width = `500px`;
                label.appendChild(input);
                break;
            case `number`:
                input.type = `text`;
                input.name = elem[`name`];
                input.style.width = `100px`;
                label.appendChild(input);
                break;
            case `shorttext`:
                input.type = `text`;
                input.name = elem[`name`];
                input.style.width = `250px`;
                label.appendChild(input);
                break;
            case `submit`:
                input.type = `submit`;
                input.value = `Опубликовать`;
                form.appendChild(input);
                form.removeChild(label);
                break;
            case `combo`:
                select.style.width = `200px`;
                select.name = elem[`name`];
                for (let el of elem[`variants`]) {
                    let option = document.createElement(`option`);
                    option.innerText = el[`text`];
                    option.value = el.value;
                    select.appendChild(option);
                }
                label.appendChild(select);
                break;
            case `radio`:
                for (let el of elem[`variants`]){
                    let input = document.createElement(`input`);
                    input.type = `radio`;
                    input.name = elem[`name`];
                    input.value = el.value;
                    let span = document.createElement(`span`);
                    span.innerText = `${el[`text`]}`;
                    label.appendChild(input);
                    label.appendChild(span);
                }
                break;
            case `check`:
                input.type = `checkbox`;
                input.name = elem[`name`];
                input.checked = true;
                label.appendChild(input);
                break;
            case `memo`:
                let textArea = document.createElement(`textarea`);
                textArea.name = elem[`name`];
                label.appendChild(textArea);
                break;
                default:
                    console.log(`Доработать!`);
            }
       }
}
button1.addEventListener(`click`, (ev)=>{
    addForms(formDef1);
    button1.style.display = `none`;
});
button2.addEventListener(`click`, (ev)=>{
    addForms(formDef2);
    button2.style.display = `none`;
});