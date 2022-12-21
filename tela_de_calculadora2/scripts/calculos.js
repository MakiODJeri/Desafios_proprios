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
    return eval(`${v1} ${op} ${v2}`)
}
const remover_ult=(str)=>{
    if (str.length > 1) {
        return str.slice(0,-1)
    } else {
        return 0
    }
}
const encontrar=(str,cf)=>{
    if (str !== 0) {
        str = [...str]
        return str.includes('.')
    } else {
        return false
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
   } else if (btn.innerHTML == '/' || btn.innerHTML == '*' || btn.innerHTML == '-' || btn.innerHTML == '+') {
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
botoes[3].addEventListener('click', ()=>{
    if (onoff == true) {
        onoff = false
        span_tela.innerHTML = ''
        v1 = 0
        op = undefined
        v2 = 0
    }
})
botoes[1].addEventListener('click', ()=>{
    if (onoff == true) {
        if (op == undefined && v2 == 0) {
            navigator.clipboard.writeText(v1)
        } else if (v2 == 0) {
            navigator.clipboard.writeText(`${v1} ${op}`)
        } else {
            navigator.clipboard.writeText(`${v1} ${op} ${v2} = ${calcular()}`)
        }
    }
})
botoes[2].addEventListener('click', ()=>{
    if (v2 == 0 && op == undefined) {
        v1 = remover_ult(v1)
        span_tela.innerHTML = v1
    } else if (v2 == 0) {
        op = undefined
        span_tela.innerHTML = `${v1}`
    } else {
        v2 = remover_ult(v2)
        span_tela.innerHTML = `${v1} ${op} ${v2}`
    }
})
botoes[18].addEventListener('click', ()=>{
    if (op == undefined) {
        if (encontrar(v1,'.') != true) {
            v1 += '.'
            span_tela.innerHTML = v1
    }} else {
        if (encontrar(v2,'.') != true) {
            v2 += '.'
            span_tela.innerHTML = `${v1} ${op} ${v2}`
        }
    }
})
botoes[19].addEventListener('click', ()=>{
    if (v1.length > 0 && op.length > 0 && v2.length > 0) {
        let res = calcular()
        span_tela.innerHTML = res
        v1 = res.toString()
        op = undefined 
        v2 = 0
    }
})