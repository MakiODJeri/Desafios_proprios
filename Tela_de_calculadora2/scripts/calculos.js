const span_tela = document.querySelector('#span_tela')
const botoes = [...document.querySelectorAll('.btn_js')]
let v1 = 0
let op = undefined
let v2 = 0
let onoff = false

const remover_zero=(str)=>{
    if (str[0] == 0) {
        return str.slice(1)
    } else {
        return str
    }
}

const calcular=()=>{
    if (op == 'D') {
        return Number(v1) / Number(v2)
    } else if (op == 'x') {
        return Number(v1) * Number(v2)
    } else if (op == '-') {
        return Number(v1) - Number(v2)
    } else {
        return Number(v1) + Number(v2) 
    }
}

botoes.map((btn)=>{
   if (btn.innerHTML == 7 || btn.innerHTML == 8 || btn.innerHTML == 9 || btn.innerHTML == 4 || btn.innerHTML == 5 || btn.innerHTML == 6 || btn.innerHTML == 1 || btn.innerHTML == 2 || btn.innerHTML == 3 || btn.innerHTML == 0) {
    btn.addEventListener('click', ()=>{
        if (onoff == true) {
            if (op == undefined) {
                v1 += btn.innerHTML
                v1 = remover_zero(v1)
                span_tela.innerHTML = v1
            } else {
                v2 += btn.innerHTML
                v2 = remover_zero(v2)
                span_tela.innerHTML = `${v1} ${op} ${v2}`
            }
        }
    })
   } else if (btn.innerHTML == 'D' || btn.innerHTML == 'x' || btn.innerHTML == '-' || btn.innerHTML == '+') {
    btn.addEventListener('click', ()=>{
        if (v2 == 0) {
            op = btn.innerHTML
            span_tela.innerHTML = `${v1} ${op}`
        } else {
            op = btn.innerHTML
            span_tela.innerHTML = `${v1} ${op} ${v2}`   
        }
    })
   }
})
botoes[0].addEventListener('click', ()=>{
    if (onoff == false) {
        onoff = true
        span_tela.innerHTML = 0
    } else {
        span_tela.innerHTML = 0
        v1 = 0
        op = undefined
        v2 = 0
    }
})
botoes[1].addEventListener('click', ()=>{
    if (onoff == true) {
        onoff = false
        span_tela.innerHTML = ''
        v1 = 0
        op = undefined
        v2 = 0
    }
})
botoes[16].addEventListener('click', ()=>{
    if (v1.length > 0 && op.length > 0 && v2.length > 0) {
        let res = calcular()
        span_tela.innerHTML = res
        v1 = res.toString()
        op = undefined 
        v2 = 0
    }
})