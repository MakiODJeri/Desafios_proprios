const listaarray = document.querySelector('#arraylist')
const nummin = document.querySelector('#min')
const nummax = document.querySelector('#max')
const btnverificar = document.querySelector('#verificar')
const resultado = document.querySelector('#resultado')  
let lista = []
let listares = []
const min = 1
const max = 20
const gerarnumerosaleatorios=(min,max)=>{
    lista = []
    for (let c = 0; c < 10; c++) {
        lista.push(Math.floor(Math.random() * (max - min) + min))
    }
    arraylist.innerHTML += '[ '
    lista.map((vl)=>{
        arraylist.innerHTML += vl + ', '
    })
    arraylist.innerHTML += ']'
}
gerarnumerosaleatorios(min,max)
btnverificar.addEventListener('click', ()=>{
    let minesc = nummin.value 
    let maxesc = nummax.value 
    if (minesc < min || maxesc > max) {
        window.alert('Valor mínimo ou máximo ultrapassados.')
    } else if (minesc.length == 0 || maxesc.length == 0) {
        window.alert('Algum valor não digitado, impossível de se fazer a verificação')
    } else {
        if (minesc > maxesc) {
            const aux = minesc
            minesc = maxesc
            maxesc = aux
        }
        const retorno = lista.every((vl, ind)=>{
            if (vl >= minesc && vl <= maxesc) {
                return true
            }
            indx = ind
        })
        if (retorno) {
            resultado.innerHTML = `Todos os Valores contidos em "Array" estão entre ${minesc} e ${maxesc}.`
        } else {
            resultado.innerHTML = `Nem todos os valores contidos em "Array" estão entre ${minesc} e ${maxesc}, a prova está na posição ${indx}.`
        }
    }
})