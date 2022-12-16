"use strict"
let soma=(...valores)=>{
    let total = 0
    for (let c of valores) {
        total += c
    }
    return total
}
console.log(soma(24,57,68))