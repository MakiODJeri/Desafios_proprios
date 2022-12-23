const btn_alerta = document.querySelector('#alerta')
const btn_confirmar = document.querySelector('#confirmar')
const btn_prompt = document.querySelector('#prompt')
const botoes = [...document.querySelectorAll('button')]
btn_alerta.addEventListener('click', ()=>{
    window.alert('Uai sô...')  
})
btn_confirmar.addEventListener('click', ()=>{
    if (window.confirm('Aceita receber notificações desta pagina?') )  {
        console.log('Uai sô...')
    } else {
        console.log('Uai sô?')
    }
})
btn_prompt.addEventListener('click', ()=>{
    let cor = window.prompt('Qual a sua cor favorita (por favor digite em código hexadecimal; Exemplo: #fc4)')
    if (cor != null) {
        botoes.map((botao)=>{
            botao.addEventListener('mouseenter', ()=>{
                botao.style.border = `1px solid ${cor}`
            })
            botao.addEventListener('mouseleave', ()=>{
                botao.style.border = `1px solid black`
            })
        })
    }
})