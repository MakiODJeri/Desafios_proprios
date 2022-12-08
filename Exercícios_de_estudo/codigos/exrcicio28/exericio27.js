const dt = document.querySelector('#dt')
const numd20 = document.querySelector('#numd20')
const bonus = document.querySelector('#bonus')

const btns = [...document.querySelectorAll('.av')]
const maiormenor = [...document.querySelectorAll('.maiormenor')]

const btnrolar = document.querySelector('#rolar')

const vldados = document.querySelector('#valores')
const vlres = document.querySelector('#resultado')

let vldt = 1
dt.innerHTML = vldt
let vlnumd20 = 1
numd20.innerHTML = vlnumd20
let vlbonus = 0
bonus.innerHTML = vlbonus
let maimen = true
let valores = []
let resultado = ''

const teste=(vls,dtteste,bn,mm)=>{
    vls.sort(comparar)
    if (bn == 0) {
        dtteste = 20
    } else  {
        for (let c in vls) {
            vls[c] += bn
        }
        vldados.innerHTML += ' + '
        vldados.innerHTML += bn
    }
    if (mm) {

    } else {

    }
}
const comparar=(a,b)=>{
    return a - b
}
const geraraleatorio=(d20)=>{
    valores = []
    for (let c = 1; c <= d20; c++) {
        valores.push(Math.floor(Math.random() * (20 - 1) + 1))
    }
    vldados.innerHTML = ''
    vldados.innerHTML += '[ '
    valores.map((vl)=>{
        vldados.innerHTML += vl + '... '
    })
    vldados.innerHTML += ']'
    console.log(valores)
}
const plus=(vl,el,max)=>{
    if (vl < max) {
        vl++
        el.innerHTML = vl
        return vl
    } else {
        window.alert(`Valor máximo ${max} alcançado.`)
        return vl
    }
}
const minus=(vl,el,min)=>{
    if (vl > min) {
        vl--
        el.innerHTML = vl
        return vl
    } else {
        window.alert(`Valor mínimo ${min} alcançado.`)
        return vl
    }
}
btns[0].addEventListener('click', ()=>{
    vldt = plus(vldt,dt,30)
})
btns[1].addEventListener('click', ()=>{
    vldt = minus(vldt,dt,1)
})
btns[2].addEventListener('click', ()=>{
    vlnumd20 = plus(vlnumd20,numd20,5)
})
btns[3].addEventListener('click', ()=>{
    vlnumd20 = minus(vlnumd20,numd20,1)
})
btns[4].addEventListener('click', ()=>{
    vlbonus = plus(vlbonus,bonus,10)
})
btns[5].addEventListener('click', ()=>{
    vlbonus = minus(vlbonus,bonus,0)
})
maiormenor[0].addEventListener('click', ()=>{
    maimen = true
})
maiormenor[1].addEventListener('click', ()=>{
    maimen = false
})
btnrolar.addEventListener('click',()=>{
    geraraleatorio(vlnumd20)
    teste(valores,vldt,vlbonus,maimen)
})