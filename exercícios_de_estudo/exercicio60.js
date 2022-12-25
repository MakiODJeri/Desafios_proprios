const gerarAleatorio = function (min,max) {
    const n = Math.floor(Math.random() * ((max+1) - min) + min)
    console.log(n)
    return n
}

//function declarations
function isPar(n) {
    if (n%2 == 0) {
        return true
    } else {
        return false 
    }
}
//function expressions
const isImpar = function (n) {
    if (n%2 != 0) {
        return true
    } else {
        return false
    }
}
//Arrow function
//Forma comum
const parOrImpar = (n) => {
    if (n%2 == 0) {
        return `${n} é par.`
    } else {
        return `${n} é impar.`
    }
}

const dol  = val => val * 6
const real = val => val / 6

const myNumber = {
    isPar: function(n){
        
        return n%2 == 0
    },
    isImpar: n => n%2 != 0
}
//res
/*console.log(isPar(gerarAleatorio(1,100)))
console.log(isImpar(gerarAleatorio(1,100)))
console.log(parOrImpar(gerarAleatorio(1,100)))
const val_dol = dol(gerarAleatorio(1,100))
const val_real = real(val_dol)
console.log(val_real)*/
console.log(myNumber.isPar(gerarAleatorio(1,100)))
console.log(myNumber.isImpar(gerarAleatorio(1,100)))