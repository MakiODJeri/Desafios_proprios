nomes = []
caixas = []
const gerarnomes=(cont=1)=>{
    for (let c = 0; c < cont; c++)  {
        let base = 'Item'
        base += ' ' + (c + 1)
        nomes.push(base)
    }
}
const criarcaixas=(lista=['box1'])=>{
    lista.map((nome_caixa)=>{
        let caixa = document.createElement('i')
        caixa.id = nome_caixa
        caixa.innerHTML = nome_caixa + '<br>'
        caixa.classList.add('item')
        caixas.push(caixa)
    })
}
const menu = document.querySelector('#menu')
const btnmenu = document.querySelector('#btn_menu')
gerarnomes(5)
criarcaixas(nomes)
caixas.map((caixa)=>{
    menu.appendChild(caixa)
})
btnmenu.addEventListener('click', ()=>{
    const items = [...document.querySelectorAll('.item')]
    items.map((item)=>{
        item.classList.toggle('aparecer')
    })
})