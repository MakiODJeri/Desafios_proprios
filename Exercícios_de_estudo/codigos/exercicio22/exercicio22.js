const adci = document.querySelector('#adci')
const rmvr = document.querySelector('#rmvr')
const core = document.querySelector('#cor')
const posi = document.querySelector('#posi')
const items = [...document.querySelectorAll('.item')]
let selecionado = ''
let listslec = []

items.map((el)=>{
    el.addEventListener('click',()=>{
        if (listslec[0] != el) {
            selecionado = el
            selecionado.classList.add('marca')
            listslec.push(el)
            posi.innerText = el.innerText
        }
        if (listslec.length == 2) {
            const rmvel = listslec[0]
            rmvel.classList.remove('marca')
            listslec.shift()
        }
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
})//botão para adicionar uma cor
rmvr.addEventListener('click',()=>{
    if (selecionado == '') {
        window.alert('Selecione Algum dos items na lista abaixo antes de clicar em alguma opção.')
    } else {
        selecionado.style.background = 'white'
    }
})//botão para remover uma cor