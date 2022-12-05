const mina = document.querySelector('#mina')
const minv = document.querySelector('#minv')
const maxa = document.querySelector('#maxa')
const maxv = document.querySelector('#maxv')
const show = document.querySelector('#show')
const maxnum = document.querySelector('#max')
const minnum = document.querySelector('#min')
const telamos = document.querySelector('#mostrar')
let list = []
let max = 0
let min = 0
mina.addEventListener('click', ()=>{
    if (min < 100) {
        min++
    } else {
        window.alert('O valor máximo aceito é 99.')
    }
})
minv.addEventListener('click', ()=>{
    if (min >= 0) {
        min--
    }
})
maxa.addEventListener('click', ()=>{
    max++
})
maxx.addEventListener('click', ()=>{
    max--
})