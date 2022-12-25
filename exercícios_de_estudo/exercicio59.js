/*let msg = 'Processando'
let pnt = ''
const espera = function () {
    if (pnt.length < 3) {
        pnt += '.'
    } else {
        pnt = '.'
    }
    return msg + pnt
}*/

/*console.log(espera())
setTimeout(()=>{
    console.log(espera())
},1000)
setTimeout(()=>{
    console.log(espera())
},2000)*/

/*const mostrar_espera = setInterval(()=>{
    console.log(espera())
},1000)*/

/*const roll_d = function (min,max,val_e) {
    let val_d = 0
    let c = 0
    while (val_d < val_e) {
        val_d = Math.floor(Math.random() * ((max+1) - min) + min)
        c++
    }
    return val_d + '-' + c
}*/

const quantos_20 = function () {
    let lista_num = []
    let c = 0
    for (let cont = 0; cont < 100; cont++) {
        lista_num.push(Math.floor(Math.random() * (21 - 1) + 1) )
        if (lista_num[cont] == 20) {
            c++
        }
    }
    console.log(lista_num)
    return '---' + c + '---'
}

const promessa = new Promise(resolve => {
    resolve('Promise data')  
})

promessa.then(data => console.log(data))
//console.log(roll_d(1,20,20))
console.log(quantos_20())