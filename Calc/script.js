"use strict";
function calculator (str){
    function splitter (str){
        function minus(array){
            function multi(array){
                function divis (array){
                    function endSum(array){
                        let arr = [];
                        for (let i = 0; i < array.length; i++){
                            if (array[i] === "+"){
                                continue;
                            }else{
                                arr.push(array[i]);
                            }
                        }
                        return Math.floor((arr.reduce(((count, el) => count+el), 0))*100)/100;;
                    };
                    let arr = [];
                    for (let i = 0; i < array.length; i++){
                        if (array[i+1] === "/"){
                            arr.push(array[i] / array[i+2]);
                            i+=2;
                        }
                        else {
                            arr.push(array[i]);
                        }
                    }
                    return endSum(arr);
                }
                let arr = [];
                for (let i = 0; i < array.length; i++){
                    if (array[i+1] === "*"){
                        arr.push(array[i] * array[i+2]);
                        i+=2;
                    }
                    else {
                        arr.push(array[i]);
                    }
                }
                return divis(arr);
            }
            let arr = [];
            for (let i = 0; i < array.length; i++){
                if (array[i] === "-"){
                    let num = -1;
                    num *= array[i+1];
                    arr.push(num);
                    num = -1;
                    ++i;
                }
                else {
                    arr.push(array[i]);
                }
            }
            return multi(arr);
        }

        let count = "", arr = [];
        for (let i = 0; i < str.length; i++){
            if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/"){
                if (i === 0){
                    arr.push(str[i])
                }else if(str[i+1] === "-"){
                    arr.push(parseFloat(count));
                    arr.push(str[i]);
                    count = ""
                    count += str[i+1];
                    ++i;
                }else{
                    arr.push(parseFloat(count));
                    arr.push(str[i]);
                    count = "";
                }
            }else if (i === str.length-1){
                count += str[i];
                arr.push(parseFloat(count));
            }
            else {
                count += str[i]
            }
        }
        return minus(arr);
    }
    function parent(str){
        let num = str.lastIndexOf("(");
        if (num === -1){
            return str;
        }
        else{
            let newStr1 = str.slice(0, num), newStr2 = str.slice(num+1), count = "";
            for (let i = 0; i < newStr2.length; i++){
                if (newStr2[i] === ")"){
                    count = splitter(count);
                    newStr1 += count;
                    newStr1 += newStr2.slice(i+1);
                    break;
                }
                count+= newStr2[i];
            }
            str = newStr1;
            return parent(str);
        }
    }
    return splitter(parent(str));
}
let panel = document.getElementById("panel");
function one(){
    panel.innerHTML += "1";
}
function two(){
    panel.innerHTML += "2";
}
function three(){
    panel.innerHTML += "3";
}
function fore(){
    panel.innerHTML += "4";
}
function five(){
    panel.innerHTML += "5";
}
function six(){
    panel.innerHTML += "6";
}
function seven(){
    panel.innerHTML += "7";
}
function eight(){
    panel.innerHTML += "8";
}
function nine(){
    panel.innerHTML += "9";
}
function zero(){
    panel.innerHTML += "0";
}
function dote(){
    panel.innerHTML += ".";
}
function plus(){
    panel.innerHTML += "+";
}
function minus(){
    panel.innerHTML += "-";
}
function multiply(){
    panel.innerHTML += "*";
}
function divide(){
    panel.innerHTML += "/";
}
let clear = document.getElementById("clear");
clear.addEventListener("click", function (e){
    panel.innerHTML = "";
})
function bracketOpen(){
    panel.innerHTML += "(";
}
function bracketClose(){
    panel.innerHTML += ")";
}
let ans = document.getElementById("ans");
ans.addEventListener("click", function (e) {
    let el = panel.innerHTML;
    panel.innerHTML = "";
    //console.log(el, panel.innerHTML)
    panel.innerHTML = String(calculator(el));
})
