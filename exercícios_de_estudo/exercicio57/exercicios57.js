const objetos = document.querySelector('#objetos')
const teclado1={
    case:'acrílico',
    mount:'gasket',
    pcb:'65%',
    hotswap:'sim',
    keycaps:'pbt',
    impressao:'doubleshot',
    switch:'Everglide aqua king',
    conexo:'com fio'
}
console.log(teclado1)
teclado1['estabilizadores']='Everglide'
teclado1['foam_mod']='sim'
teclado1['tape_mod']='sim'
teclado1['switchs_lubrificados']='não'
const teclados=[
    {
        case:'alumínio',
        mount:'tray',
        pcb:'75%',
        hotswap:'sim',
        keycaps:'pbt',
        impressao:'doubleshot',
        switch:'Glorious holy-pandas',
        conexao:'com fio'
    },
    {
        case:'plástico',
        mount:'gasket',
        pcb:'65%',
        hotswap:'sim',
        keycaps:'pbt',
        impressao:'dye-sub',
        switch:'Akko sponge',
        conexao:'com fio'
    },
    {
        case:'plástico',
        mount:'tray',
        pcb:'60%',
        hotswap:'sim',
        keycaps:'pbt',
        impressao:'doubleshot',
        switch:'Lekker',
        conexao:'com fio'
    }
]
teclados.forEach((teclado)=>{
    let div_teclado = document.createElement('div')
    div_teclado.innerHTML = `Case: ${teclado.case}<br>`
    div_teclado.innerHTML += `Mount: ${teclado.mount}<br>`
    div_teclado.innerHTML += `PCB: ${teclado.pcb}<br>`
    div_teclado.innerHTML += `Hotswap: ${teclado.hotswap}<br>`
    div_teclado.innerHTML += `Keycaps: ${teclado.keycaps}<br>`
    div_teclado.innerHTML += `Impressão: ${teclado.impressao}<br>`
    div_teclado.innerHTML += `Switch: ${teclado.switch}<br>`
    div_teclado.innerHTML += `Conexão: ${teclado.conexao}`
    div_teclado.setAttribute('class','teclados')
    objetos.appendChild(div_teclado)
})