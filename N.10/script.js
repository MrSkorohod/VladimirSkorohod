/*--------Решение через Set------------
"use strict";
function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    let rep = new Set();
    console.log( 'цветов: ' + colorsCount );
    for ( var i=1; i<=colorsCount; i++ ) {
        var n=randomDiap(1,7);
        var colorName=colors[n];
        rep.add(colorName);
    }
    for (let el of rep){
        console.log(el);
    }
}

mood(3);
-------------------------------- */
"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    let repos = {};
    console.log( 'цветов: ' + colorsCount );
    for ( var i=1; i<=colorsCount; i++ ) {
        var n = randomDiap(1, 7);
        var colorName = colors[n];
        if (!(colorName in repos)) {
            repos[colorName] = 0;
        }
        repos[colorName]++;
    }
    for (let el in repos){
        if(repos[el] === 1){
            console.log (el);
        }
    }
}

mood(10);