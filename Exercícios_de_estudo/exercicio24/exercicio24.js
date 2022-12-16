const mina = document.querySelector('#mina')
const minv = document.querySelector('#minv')
const maxa = document.querySelector('#maxa')
const maxv = document.querySelector('#maxv')
const ttla = document.querySelector('#ttla')
const ttlv = document.querySelector('#ttlv')
const show = document.querySelector('#show')
const maxnum = document.querySelector('#max')
const minnum = document.querySelector('#min')
const ttlnum = document.querySelector('#ttl')
const telamos = document.querySelector('#mostrar')
let list = []
let max = 999
let min = 0
let total = 132
maxnum.innerHTML = max 
minnum.innerHTML = min
ttlnum.innerHTML = total
mina.addEventListener('click', ()=>{
    if (min < 999) {
        min++
        minnum.innerHTML = min
    } else {
        window.alert('O valor máximo aceito é 999.')
    }
})
minv.addEventListener('click', ()=>{
    if (min > 0) {
        min--
        minnum.innerHTML = min
    } else {
        window.alert('O valor mínimo aceito é 0.')
    }
})
maxa.addEventListener('click', ()=>{
    if (max < 999) {
        max++
        maxnum.innerHTML = max
    } else {
        window.alert('O valor máximo aceito é 999.')
    }
})
maxv.addEventListener('click', ()=>{
    if (max > 0) {
        max--
        maxnum.innerHTML = max
    } else {
        window.alert('O valor mínimo aceito é 0.')
    }
})
ttla.addEventListener('click', ()=>{
    if (total < 220) {
        total++
        ttlnum.innerHTML = total
    } else {
        window.alert('O valor máximo aceito é 220.')
    }
})
ttlv.addEventListener('click', ()=>{
    if (total > 1) {
        total--
        ttlnum.innerHTML = total
    } else {
        window.alert('O valor mínimo aceito é 1.')
    }
})
function geraraleatorio() {
    for (let c = 0; c < total; c++) {
        let rnum = Math.floor(Math.random() * (999 - 0) + 0)
        list.push(rnum)
    }
}
function encontrar(max, min) {
    let peneira = []
    list.map((lnum)=>{
        if (lnum >= min && lnum <= max) {
           peneira.push(lnum) 
        }
    })
    for (let num of peneira) {
        telamos.innerHTML += num + '... '
    }
}
show.addEventListener('click', ()=> {
    telamos.innerHTML = ''
    list = []
    geraraleatorio()
    encontrar(max, min)
})