"use strict";

let img = document.querySelector("img");
let up = img.offsetWidth;
let rotate = 0;
document.body.addEventListener("keyup", function(event){
    console.log(event);
    if (event.key === "ArrowUp"){
     up += 50;
     img.style.width = `${up}px`;
    }else if (event.key === "ArrowDown"){
        up -= 50;
        img.style.width = `${up}px`;
    }else if (event.key === "ArrowRight"){
        rotate += 45;
        img.style.transform = `rotate(${rotate}deg)`
    }else if (event.key === "ArrowLeft"){
        rotate += 45;
        img.style.transform = `rotate(${-rotate}deg)`
    }
});