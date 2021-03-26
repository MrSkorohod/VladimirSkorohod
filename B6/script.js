function formatNumber (num, str){
    let newNum = num.toFixed(2), answer = [];
    let arr = str.split(" ").reverse();
    for (let i = 0; i < arr.length; i++){
        answer.push(newNum.slice(-arr[i].length));
        newNum = newNum.slice(0, -arr[i].length);
    }
    answer = answer.reverse();
    for (let el of answer){
        debugger;
        if (answer[0] === ""){
            answer.splice(0,1);
        }
    }

    return answer.join(" ");
}