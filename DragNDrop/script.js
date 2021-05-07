"use strict";
let dndRect = document.querySelector(".DND");
let balls = dndRect.querySelectorAll("img");
let zIndex = 0;
[].forEach.call(balls,(elem) => {
    moveBall(elem);
});
function moveBall(elem){
    elem.addEventListener("mousedown", (event) => {
        event.preventDefault();
        let shiftX = Math.round(event.clientX - elem.getBoundingClientRect().left);
        let shiftY = Math.round(event.clientY - elem.getBoundingClientRect().top);


        elem.style.position = "absolute";
        elem.style.zIndex = `${zIndex + 1}`;

        move(event.pageX, event.pageY);

        function move(pageX, pageY){
            elem.style.left = `${pageX - shiftX}px`;
            elem.style.top = `${pageY - shiftY}px`;

        }
        function onMove(event) {
            move(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMove);
        elem.addEventListener("mouseup", (event) => {
            document.removeEventListener("mousemove", onMove);
            elem.style.zIndex = `${zIndex}`;
            return null;
        });
        elem.ondragstart = function() {
            return false;
        };
    });
}
