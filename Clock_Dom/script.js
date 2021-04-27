"use strict";
const body = document.querySelector("body");
const divCircle = document.createElement("div");
const divClockNow = document.createElement("div");
const divHourArrow = document.createElement("div");
const divMinuteArrow = document.createElement("div");
const divSecondArrow = document.createElement("div");
const divArrowCircle = document.createElement("div");


divClockNow.style.cssText = "position:absolute; color:#0000cc; left: 145px; top: 100px; font-size: 35px";
divHourArrow.style.cssText = "position: absolute; background-color: black; width: 4px; height: 120px; left: 200px; top: 80px; transform-origin:100% 100% 0; z-index: 4;";
divMinuteArrow.style.cssText = "position: absolute; background-color: black; width: 3px; height: 150px; left: 200px; top: 50px; transform-origin:100% 100% 0; z-index: 5;";
divSecondArrow.style.cssText = "position: absolute; background-color: red; width: 2px; height: 200px; left: 200px; top:20px; transform-origin:90% 90% 0;  z-index: 6;";
divCircle.style.cssText = "position: relative; width: 400px; height: 400px; border-radius: 50%; background: aqua;";
divArrowCircle.style.cssText = "position: absolute; z-index: 7; width: 20px; height: 20px; border-radius: 50%; background: #fff; left: 190px; top: 190px";

divCircle.appendChild(divHourArrow);
divCircle.appendChild(divMinuteArrow);
divCircle.appendChild(divSecondArrow);
divCircle.appendChild(divArrowCircle);
const num = 12;

function radian(deg){
    return (Math.PI / 180) * deg;
}
const radius = 170;
for (let i = 0; i < num; i++){
    const miniCirle = document.createElement("div");
    miniCirle.style.cssText = "position: absolute; width: 60px; height: 60px; border-radius: 50%; background: #ae83ff; text-align: center; font-size: 35px;";
    const pos = (i + 1) * 360 / num;
    const angle = radian(pos) - radian(90);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    miniCirle.style.left = `${x+radius}px`;
    miniCirle.style.top = `${y+radius}px`;
    miniCirle.innerText = i+1;
    divCircle.appendChild(miniCirle);
}


setInterval(()=>{
    let date = new Date();
    divClockNow.innerHTML = date.toLocaleTimeString();
    divCircle.appendChild(divClockNow);
    const hour = date.getHours() * 30;
    const minute = date.getMinutes() * 6;
    const seconds = date.getSeconds() * 6;
    divHourArrow.style.transform = `rotate(${(hour) + (minute/12)}deg)`;
    divMinuteArrow.style.transform = `rotate(${minute}deg)`;
    divSecondArrow.style.transform = `rotate(${seconds}deg)`;
},1000);
body.appendChild(divCircle);
