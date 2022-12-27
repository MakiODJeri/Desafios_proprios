const gerarAleatorio = (max=20,min=1,vezes=1) => {
    let lista_vals = []
    if (vezes < 0) {
        vezes *= -1
    }
    if (vezes == 0) {
        vezes = 1
    }
    for (let c = 0; c < vezes; c++) {
        lista_vals.push(Math.floor(Math.random() * ((max + 1) - min) + min))
    }
    return lista_vals
}
const someTudo = (vals) => {
    let res = 0
    for (let c = 0; c < vals.length; c++) {
        res += vals[c]
    }
    return res
}
const spreadSomeTudo = (...vals) => {
    let res = 0
    for (let c = 0; c < vals.length; c++) {
        res += vals[c]
    }
    return res
}
function argumentsFunctionSomeTudoV1 () {
    let vals = Array.from(arguments)
    let res = 0
    for (let c = 0; c < vals.length; c++) {
        res += vals[c]
    }
    return res
}
function argumentsFunctionSomeTudoV2 () {
    let vals = Array.from(arguments)
    return vals.reduce((res,cur_val)=> res += cur_val)
}
function functionSomeTudoV1 () {
    let vals = Array.from(arguments)
    vals = vals.reduce((res,cur_val)=> res += cur_val)
    let res = 0
    for (let c = 0; c < vals.length; c++) {
        res += vals[c]
    }
    return res
}
function functionSomeTudoV2 () {
    let vals = Array.from(arguments)
    vals = vals.reduce((res,cur_val)=> res += cur_val)
    return vals.reduce((res,cur_val)=> res += cur_val)
}
const lista_vals = gerarAleatorio(10,1,3)
console.log(lista_vals)
console.log(functionSomeTudoV2(lista_vals))