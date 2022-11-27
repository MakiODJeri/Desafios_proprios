const bau = document.querySelector('#bau')
const botao = document.querySelector('#alhevo')
//const caixas = [...document.querySelectorAll('.caixa')]
//const tres = document.querySelector('#caixa03')
//console.log('=================================================')
//console.log(bau)
//console.log(caixas)
//console.log('=================================================')
//console.log(bau.children[3])
//console.log(bau.firstElementChild)
//console.log(bau.lastElementChild)
//console.log('=================================================')
//console.log(tres.children)
//console.log(tres.parentNode)
//console.log(tres.nextElementSibling)
//console.log('=================================================')
botao.addEventListener('click',()=>{
    bau.style.background = 'black'
    bau.style.border = '4px solid grey'
    let i = [...bau.children]
    let c = 1
    i.map((el)=>{ 
        el.innerHTML = 'ALHEVO'
        el.style.border = '2px solid grey'
        if (c%2 >0) {
            el.style.background = 'darkred'
            c++
        } else {
            el.style.background = 'lightgrey'
            c++
        }
    })
})