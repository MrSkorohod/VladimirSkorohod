function buildWrapper(tag){
        return (str) => {
            const vocabular = {
                "\'": "&apos;",
                "\"": "&quot;",
                "\<": "&lt;",
                "\>": "&gt;",
                "\&": "&amp;"
            };
            let newStr = "";
            for (let i = 0; i <str.length; i++){
                if (str[i] in vocabular){
                    newStr += vocabular[str[i]];
                }else{newStr += str[i]}
            }
            return `<${tag}>${newStr}</${tag}>`
        }
}
let wrapH1 = buildWrapper("H1");
let wrapP = buildWrapper("P")
console.log( wrapH1("СТИХИ"));
console.log( wrapP("Однажды в студёную зимнюю пору") );
console.log( wrapP("Вкусные M&M's") );