const caixa = document.querySelector('#caixa')

let lista_mapa =new Map()
lista_mapa.set('AOP',[''])
lista_mapa.set('OSNF',['Arthur'])
lista_mapa.set('OPD',['Arthur','Dante'])
lista_mapa.set('OPC',['Arthur','Dante','Carina','Rubens','Balu'])
lista_mapa.set('OSNI',['Amelie','Olivier'])
lista_mapa.set('SDOL',['Chico','Dara','Lírio'])

let res = ''
if (lista_mapa.has('OPM')) {
    res = 'Existe'
} else {
    res = 'Não Existe'
}
console.log(res)
lista_mapa.forEach((temp)=>{
    let dentro_caixa = document.createElement('div')
    dentro_caixa.innerHTML = temp
    dentro_caixa.classList.add('dentro')
    caixa.appendChild(dentro_caixa)
})