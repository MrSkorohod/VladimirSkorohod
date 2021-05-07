"use strict";
let  cloth = document.querySelector("svg");
let clockCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
clockCircle.setAttribute("cx", "200");
clockCircle.setAttribute("cy", "200");
clockCircle.setAttribute("r", "200");
clockCircle.setAttribute("fill", "aqua");
cloth.appendChild(clockCircle);
const num = 12;
const radius = 170;

function radian(deg){
    return (Math.PI / 180) * deg;
}
function clockArrows (){
    let date = new Date();
    clockNow.innerHTML = date.toLocaleTimeString();
    cloth.appendChild(clockNow);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const posHour = (hour) * 360 / 12;
    const posMinute = (minute) * 360 / 60;
    const posSecond = (seconds) * 360 / 60;
    const angleHour = radian(posHour) - radian(90);
    const angleMinute = radian(posMinute) - radian(90);
    const angleSecond = radian(posSecond) - radian(90);
    function angleX(angle) {
        return (radius * Math.cos(angle)) + 30;
    }
    function angleY(angle) {
        return (radius * Math.sin(angle)) + 30;
    }
    hourHand.setAttribute("x2", `${Math.round(angleX(angleHour)+ radius)}`);
    hourHand.setAttribute("y2", `${Math.round(angleY(angleHour)+ radius)}`);
    minuteHand.setAttribute("x2", `${Math.round(angleX(angleMinute)+ radius)}`);
    minuteHand.setAttribute("y2", `${Math.round(angleY(angleMinute)+ radius)}`);
    secondHand.setAttribute("x2", `${Math.round(angleX(angleSecond)+ radius)}`);
    secondHand.setAttribute("y2", `${Math.round(angleY(angleSecond)+ radius)}`);

}


 for(let i = 0; i < num; i++ ){
     let miniCircle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
     const pos = (i + 1) * 360 / num;
     const angle = radian(pos) - radian(90);
     const x = radius * Math.cos(angle);
     const y = radius * Math.sin(angle);
     miniCircle.setAttribute("cx", `${Math.round(x+radius + 30)}`);
     miniCircle.setAttribute("cy", `${Math.round(y+radius + 30)}`);
     miniCircle.setAttribute("r", `30`);
     miniCircle.setAttribute("fill", `#fcff65`);
     let clockNumber = document.createElementNS('http://www.w3.org/2000/svg', "text");
     cloth.appendChild(miniCircle);
     clockNumber.innerHTML = i+1;
     clockNumber.setAttribute("x", `${x+radius + 25}`);
     clockNumber.setAttribute("y", `${y+radius + 40}`);
     clockNumber.setAttribute("font-size", "30");
     cloth.appendChild(clockNumber);
 }
let hourHand = document.createElementNS('http://www.w3.org/2000/svg', "line");
hourHand.setAttribute("x1", "200");
hourHand.setAttribute("y1", "200");
hourHand.setAttribute("x2", "200");
hourHand.setAttribute("y2", "50");
hourHand.setAttribute("stroke", "black");
hourHand.setAttribute("stroke-width", "6");
let minuteHand = document.createElementNS('http://www.w3.org/2000/svg', "line");
minuteHand.setAttribute("x1", "200");
minuteHand.setAttribute("y1", "200");
minuteHand.setAttribute("x2", "200");
minuteHand.setAttribute("y2", "50");
minuteHand.setAttribute("stroke", "black");
minuteHand.setAttribute("stroke-width", "4");
let secondHand = document.createElementNS('http://www.w3.org/2000/svg', "line");
secondHand.setAttribute("x1", "200");
secondHand.setAttribute("y1", "200");
secondHand.setAttribute("x2", "200");
secondHand.setAttribute("y2", "50");
secondHand.setAttribute("stroke", "red");
secondHand.setAttribute("stroke-width", "3");
let clockNow = document.createElementNS('http://www.w3.org/2000/svg', "text");
clockNow.setAttribute("x", `130`);
clockNow.setAttribute("y", `130`);
clockNow.setAttribute("font-size", "40");
cloth.appendChild(hourHand);
cloth.appendChild(minuteHand);
cloth.appendChild(secondHand);


clockArrows();
 setInterval(()=>{
     clockArrows();
  }, 1000);

let arrowCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
arrowCircle.setAttribute("cx", "200");
arrowCircle.setAttribute("cy", "200");
arrowCircle.setAttribute("r", "10");
arrowCircle.setAttribute("fill", "#fff");
cloth.appendChild(arrowCircle);


