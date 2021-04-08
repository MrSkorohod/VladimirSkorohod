let snake = document.querySelector("#snake");
let position = 10;
parseFloat(snake.style.left = `${position}px`);
parseFloat(snake.style.top = `${position}px`);
let timerRight ,timerLeft, timerUp, timerDown;
document.body.addEventListener("keyup", (event)=>{
    switch (event.key) {
        case `ArrowRight`:
            clearInterval(timerLeft);
            clearInterval(timerUp);
            clearInterval(timerDown);
            timerRight = setInterval(right, 20);
            break;
        case `ArrowLeft`:
            clearInterval(timerRight);
            clearInterval(timerUp);
            clearInterval(timerDown);
            timerLeft = setInterval(left, 20);
            break;
        case `ArrowUp`:
            clearInterval(timerRight);
            clearInterval(timerLeft);
            clearInterval(timerDown);
            timerUp = setInterval(up, 20);
            break;
        case`ArrowDown`:
            clearInterval(timerRight);
            clearInterval(timerLeft);
            clearInterval(timerUp);
            timerDown = setInterval(down, 20);
            break;
        default:
            break;
    }
});
function right(){
    position = parseFloat(snake.style.left);
    position++;
    snake.style.left = `${position}px`;
    if (position >= 549){
        clearInterval(timerRight);
        alert(`You lose!`);
        snake.style.left = `10px`;
        snake.style.top = `10px`;
    }
}
function left(){
    position = parseFloat(snake.style.left);
    position--;
    snake.style.left = `${position}px`
    if (position <= 0){
        clearInterval(timerLeft);
        alert(`You lose!`);
        snake.style.left = `10px`;
        snake.style.top = `10px`;
    }
}
function up(){
    position = parseFloat(snake.style.top);
    position--;
    snake.style.top = `${position}px`;
    if (position <= 0){
        clearInterval(timerUp);
        alert(`You lose!`);
        snake.style.left = `10px`;
        snake.style.top = `10px`;
    }
}
function down(){
    position = parseFloat(snake.style.top);
    position++;
    snake.style.top = `${position}px`;
    if (position >= 449){
        clearInterval(timerDown);
        alert(`You lose!`);
        snake.style.left = `10px`;
        snake.style.top = `10px`;
    }
}