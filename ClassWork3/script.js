"use strict";
let ball = document.querySelector("img");
ball.onmousedown = function (ev){
    let shiftX = ev.clientX - getElementPos(ball).left;
    let shiftY = ev.clientY - getElementPos(ball).top;
    ball.style.position = "absolute";
    document.body.append(ball);
    moveAt(ev.pageX, ev.pageY);
    function moveAt(pageX, pageY){
        ball.style.left = `${pageX - shiftX}px`;
        ball.style.top = `${pageY - shiftY}px`;
    }
    function onMouseMove (ev){
        moveAt(ev.pageX, ev.pageY);
    }
    document.addEventListener("mousemove", onMouseMove);
    ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
    };
};

ball.ondragstart = function() {
    return false;
};
function getElementPos(elem) {
    var bbox=elem.getBoundingClientRect();
    return {
        left: bbox.left+window.pageXOffset,
        top: bbox.top+window.pageYOffset
    };
}