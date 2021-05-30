
var parserSource = generator.generate({moduleName: "main"});

function cal(value){
    document.getElementById("screen").value += value
}

function process(){
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}

function clr(){
    document.getElementById("screen").value = ""
}