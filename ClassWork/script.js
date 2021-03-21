"use strict";
let create = document.getElementById("create"), add = document.getElementById("add");
let formCreate = document.getElementById("formCreate");
let imageName = document.getElementById("imageName"), price = document.getElementById("price"), description = document.getElementById("description"), dataId = document.getElementById("dataId");
let arr = [];
let cards = document.getElementById("cards");
const basket = [];
let goToBasket = document.querySelector("#basket");
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];
let newCard = document.getElementById("newCard");
// let sort = document.querySelector("#sort");
// let sortCard = document.querySelector("#sortCard");
//sort.style.display = "none";
formCreate.style.display = "none";
create.addEventListener("click", (el) => {
    let obj = {
        image: imageName.value,
        price: price.value,
        description: description.value,
        dataId: dataId.value,
    };
    arr.push(obj);
    imageName.value = "";
    price.value = "";
    description.value = "";
    dataId.value = "";
    formCreate.style.display = "none";
    newCard.style.display = "inline";
});
newCard.style.transition = "1s ease-out 0.5s";
newCard.addEventListener("click", event => {
    formCreate.style.display = "inline-block";
    newCard.style.display = "none";

});
add.addEventListener("click", e => {
    cards.innerHTML = "";
    //sort.style.display = "inline-block";
    for (let i = 0; i < arr.length; i++){
        cards.innerHTML += `<div class="border" data-id="${arr[i].dataId}"><img src="${arr[i].image}"><h3>${arr[i].price} $</h3><p>${arr[i].description}</p><button>Add basket</button></div>`;
    }
    let arrButtons = document.querySelectorAll(".border button");
    for (let el of arrButtons){
        el.addEventListener("click", e =>{
           basket.push(el.parentNode);
        });
    }

});
goToBasket.addEventListener("click", event=> {
    modal.style.display = "block";
    let modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";
    for(let i=0; i < basket.length; i++){
        modalBody.innerHTML += `<img src="${basket[i].children[0].src}" width="50"><span>${basket[i].children[1].textContent}</span>`;
    }
});
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// sortCard.addEventListener("change", event =>{
//     let arr = [];
//     for (let el of document.querySelectorAll(".border h3")){
//         arr.push(el.textContent);
//     }
//     console.log(arr);
//     if (sortCard.value === "up"){
//         arr.sort()
//     }
// });
