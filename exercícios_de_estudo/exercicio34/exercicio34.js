const caixa = document.querySelector('#caixa')
const trio1 = ['água','fogo','planta']
const trio2 = ['dark','fantasma','lutador']
const trio3 = ['dark','psíquico','lutador']
const trios = [trio1,trio2,trio3]

const tipos = trios[0]
const tipo1 = tipos[0] 
const tipo2 = tipos[1]  
const tipo3 = tipos[2]  

const frase = `${tipo3} > ${tipo1} > ${tipo2}<br>\n
${tipo1} > ${tipo2} > ${tipo3}<br>\n
${tipo2} > ${tipo3} > ${tipo1}`
let dentro_caixa = document.createElement('div')
dentro_caixa.classList.add('dentro')
dentro_caixa.innerHTML = frase
caixa.appendChild(dentro_caixa)
console.log(frase)