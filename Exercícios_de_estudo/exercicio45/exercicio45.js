const btn_aba = document.querySelector('#btn_aba')
const cpas = [...document.querySelectorAll('.cpas_js')]
let estado_aba = false
btn_aba.addEventListener('click', ()=>{
    if (estado_aba == false) {
        cpas.map((el)=>{
            el.style.display = 'inline-block'
        })
        estado_aba = true
        btn_aba.innerHTML = 'Fechar'
    } else {
        cpas.map((el)=>{
            el.style.display = 'none'
        })
        estado_aba = false
        btn_aba.innerHTML = 'Abrir'
    }
})
cpas[1].addEventListener('click', ()=>{
    if (cpas[0].value.length > 0) {
        //navigator.clipboard.writeText(cpas[0].value)
        cpas[0].select()
        cpas[0].setSelectionRange(0,9999999999)
        navigator.clipboard.writeText(cpas[0].value)
        cpas[0].value = ''
    }
})
cpas[2].addEventListener('click', ()=>{
    cpas[0].value = 'Botão inútil'
})