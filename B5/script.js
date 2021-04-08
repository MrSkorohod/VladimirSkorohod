function check(str){
    const vocabular = {
        "\'": "&apos;",
        "\"": "&quot;",
        "\<": "&lt;",
        "\>": "&gt;",
        "\&": "&amp;"
    };
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] in vocabular){
            newStr += vocabular[str[i]];
        }
        else{newStr += str[i]
        }
    }
    return newStr;
}
function buildWrapper(tag){
    return (str, obj) => {
        let newStr = check(str);
        let attr = "";
        for (let key in obj){
            attr += ` ${key}="${check(obj[key])}"`
        }
        return `<${tag}${attr}>${newStr}</${tag}>`
    }
}

var wrapP=buildWrapper("P");
console.log( wrapP("Однажды в студёную зимнюю пору") );
console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
console.log( wrapP("Однажды в <студёную> зимнюю пору") );
var wrapH1=buildWrapper("H1");
console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );
