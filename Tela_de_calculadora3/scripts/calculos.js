const span_tela = document.querySelector('#span_tela')
const btns_js = [...document.querySelectorAll('.btn_js')]
const btns_calcjs = [...document.querySelectorAll('.btn_calcjs')]
const btn_res = document.querySelector('#btn_res')
let calc = '0'
let onoff = false
btns_js.map((btn)=>{
    console.log(btn.innerHTML)
})
btns_calcjs.map((btn)=>{
    console.log(btn.innerHTML)
})

const mostrar_tela=(str)=>{
    span_tela.innerHTML = str 
}
const calcular=(calculo)=>{
    return eval(calculo)
}
const remover_zero=(str)=>{
    return str.slice(1)
}

btns_js[0].addEventListener('click', ()=>{
    if (onoff == false) {
        mostrar_tela(calc)
        onoff = true
    } else {
        calc = '0'
        mostrar_tela(calc)
    }
})//Botão ON/RE
btns_js[3].addEventListener('click', ()=>{
    if (onoff) {
        mostrar_tela('')
        calc = '0'
        onoff = false
    }
})//Botão OFF
btns_js[1].addEventListener('click', ()=>{
    if (onoff) {
        navigator.clipboard.writeText(calc)
    }
})//Botão Copy
btns_js[2].addEventListener('click', ()=>{
    if (onoff && calc.length > 1) {
        calc = calc.slice(0,-1)
        mostrar_tela(calc)
    } else {
        calc = '0'
        mostrar_tela(calc)
    }
})//Botão N-
btns_calcjs.map((btn)=>{
    btn.addEventListener('click', ()=>{
        if (onoff) {
            if (calc[0] == 0) {
                calc = remover_zero(calc)
            }
            calc += btn.innerHTML
            mostrar_tela(calc)
        }
    })
})//Números e Símbolos
btn_res.addEventListener('click', ()=>{
    if (onoff) {
        calc = calcular(calc)
        mostrar_tela(calc)
    }
})