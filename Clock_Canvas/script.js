const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const radius = 200;
const translate = 30;
function getRadians(degrees) {
    return (Math.PI/180)*degrees;
}

function clock (){
    let date = new Date();
    const hour = 30*(date.getHours() + (1/60)*date.getMinutes());
    const minutes = 6*(date.getMinutes() + (1/60)*date.getSeconds());
    const seconds = 6 * date.getSeconds();
    const radiusArrowSec = 170;
    const radiusArrowMin = 150;
    const radiusArrowH = 100;
    let numClock = date.toLocaleTimeString();

    //Чистка холста
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //Рисование основы часов
    ctx.beginPath();
    ctx.arc(200, 200, radius, 0, 2*Math.PI);
    ctx.strokeStyle = "#ff67e1";
    ctx.fillStyle = "#ff67e1";
    ctx.fill();
    ctx.closePath();

    //Рисование номера часов и кружков для них
    for (let i = 1; i <= 12; i++){
        const pos = i * 360 / 12;
        const angle = getRadians(pos) - getRadians(90);
        let x = radius +  (radius - translate) * Math.cos(angle);
        let y = radius + (radius - translate) * Math.sin(angle);
        ctx.beginPath();
        ctx.arc( x, y, 30, 0, getRadians(360) );
        ctx.fillStyle = "#89d933";
        ctx.fill();
        ctx.font = "25px san-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`${i}`, x - 7, y + 7);
        ctx.closePath();
    }

    //Секундная стрелка
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "red";
    ctx.moveTo(200, 200);
    ctx.lineTo(radius + radiusArrowSec * Math.cos(Math.PI/2 - seconds*(Math.PI/180)), radius - radiusArrowSec*Math.sin(Math.PI/2 - seconds*(Math.PI/180)));
    ctx.stroke();
    ctx.closePath();

    //Минутная стрелка
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(radius + radiusArrowMin * Math.cos(Math.PI/2 - minutes*(Math.PI/180)), radius - radiusArrowMin*Math.sin(Math.PI/2 - minutes*(Math.PI/180)));
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    //Часовая стрелка
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(radius + radiusArrowH * Math.cos(Math.PI/2 - hour*(Math.PI/180)), radius - radiusArrowH*Math.sin(Math.PI/2 - hour*(Math.PI/180)));
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();


    //Рисование кружка для стрелок
    ctx.beginPath();
    ctx.arc(200, 200, 10, 0, getRadians(360));
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#fff";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //Аналоговые часы
    ctx.beginPath();
    ctx.font = "40px san-serif";
    ctx.fillStyle = "#000";
    ctx.fillText(`${numClock}`, 135, 140);
    ctx.fill();
    ctx.closePath();
}
clock();
setInterval(()=>{
    clock();
}, 1000);




