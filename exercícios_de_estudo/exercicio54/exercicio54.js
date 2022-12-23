const input_url = document.querySelector('#url')
const btn_ir = document.querySelector('#ir')
input_url.focus()
btn_ir.addEventListener('click', ()=>{
    //window.location.assign("https://makiodjeri.github.io/Desafios_proprios/alvo/index.html")
    //window.location.replace("https://makiodjeri.github.io/Desafios_proprios/alvo/index.html")
    //window.location.reload()
    //window.history.back()
    //window.history.forward()
    //console.log(window.history.length)
    //window.history.go(1)
    if (input_url.value.length > 0) {
        window.location.assign(input_url.value)
    }
})