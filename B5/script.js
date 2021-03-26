let wrapP= function buildWrapper(str, obj){
    const vocabular = {
        "\'": "&apos;",
        "\"": "&quot;",
        "\<": "&lt;",
        "\>": "&gt;",
        "\&": "&amp;"
    }
    let newStr = "";
    for(let i =0; i < str.length; i++){
        if( str[i] in vocabular){
            newStr += vocabular[str[i]];
        }
        else{newStr += str[i]
        }
    }
    let attr = "";
    for (let key in obj){
        attr += ` ${key}="${obj[key]}"`
    }
    return `<P${attr}>${newStr}</P>`
}
let wrapH1 = function buildWrapper(str, obj){
    const vocabular = {
        "\'": "&apos;",
        "\"": "&quot;",
        "\<": "&lt;",
        "\>": "&gt;",
        "\&": "&amp;"
    }
    let newStr = "";
    for(let i =0; i < str.length; i++){
        if( str[i] in vocabular){
            newStr += vocabular[str[i]];
        }
        else{newStr += str[i]
        }
    }
    let attr = "";
    for (let key in obj){
        attr += ` ${key}="${obj[key]}"`
    }
    return `<H1${attr}>${newStr}</H1>`
}