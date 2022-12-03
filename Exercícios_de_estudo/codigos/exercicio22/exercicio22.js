const adci = document.querySelector('#adci')
const rmvr = document.querySelector('#rmvr')
const core = document.querySelector('#cor')
const posi = document.querySelector('#posi')
const items = [...document.querySelectorAll('.item')]
let selecionado = ''

items.map((el)=>{
    el.addEventListener('click',()=>{
        selecionado = el
        posi.innerText = el.innerText
    })
})
adci.addEventListener('click',()=>{
    if (selecionado == '') {
        window.alert('Selecione Algum dos items na lista abaixo antes de clicar em alguma opção.')
    } else {
        const cor = core.value
        selecionado.style.background = cor
        selecionado.style.color = 'white'
        selecionado.style.textShadow = '1px 1px 0px black'
    }
})
rmvr.addEventListener('click',()=>{
    if (selecionado == '') {
        window.alert('Selecione Algum dos items na lista abaixo antes de clicar em alguma opção.')
    } else {
        selecionado.style.background = 'white'
    }
})