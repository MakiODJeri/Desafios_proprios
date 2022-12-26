const gerarAleatorio = function (min,max) {
    const n = Math.floor(Math.random() * ((max+1) - min) + min)
    //console.log(n)
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
        return `${n} é par`
    } else {
        return `${n} é impar`
    }
}


const myNumber = {
    IaN: function (n) {
        return !isNaN(n)
    },
    isPar: function (n) {
        return `${n} é par? ${this.IaN(n) && n%2 == 0}`
    },
    isImpar: function (n) { 
        return `${n} é impar? ${this.IaN(n) && n%2 != 0}` 
    }
}
//auto
;(function(){
    const horas = new Date().getHours()
    let msg = `são exatamente ${horas} horas.`
    if(horas <= 12) {
        msg = 'Bom dia, ' + msg
    } else if (horas <= 18) {
        msg = 'Boa tarde, ' + msg
    } else {
        msg = 'Boa noite, ' + msg
    }
    console.log(msg)
})()
//função condicional
/*function sendWhatSystem(){
    let platform = navigator.userAgent
    if (platform.toLowerCase().indexOf('linux')) {
        return 'Linux'
    } else if (platform.toLowerCase().indexOf('win')) {
        return 'Windows'
    } else {
        return 'Sei lá'
    }
}
const sendWhatSystem = (function(){
    let platform = navigator.userAgent
    if (platform.toLowerCase().indexOf('linux')) {
        return 'Linux'
    } else if (platform.toLowerCase().indexOf('win')) {
        return 'Windows'
    } else {
        return 'Sei lá'
    }
})()*/
//new function
const bloco = new Function('x','y','z', 'console.log(x,y,z); return x * y * z')
//res
//console.log(isPar(gerarAleatorio(1,100)))
//console.log(isImpar(gerarAleatorio(1,100)))
//console.log(parOrImpar(gerarAleatorio(1,100)))
//console.log(myNumber.isPar(gerarAleatorio(1,100)))
//console.log(myNumber.isImpar(gerarAleatorio(1,100)))
//alert(sendWhatSystem)
console.log(bloco((gerarAleatorio(1,100)),(gerarAleatorio(1,100)),(gerarAleatorio(1,100))))