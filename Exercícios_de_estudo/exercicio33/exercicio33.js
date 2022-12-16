const caixa = document.querySelector('#caixa')
let rgb =new Set(['Roxo','Rosa','Ciano','Verde','Cinza'])
rgb.add('Amarelo')
//rgb.forEach((cor)=>{
//    let dentro_caixa = document.createElement('div')
//    dentro_caixa.classList.add('dentro')
//    dentro_caixa.innerHTML = cor
//    caixa.appendChild(dentro_caixa)
//})
rgb.delete('Rosa')
rgb.add('Red')
for (let cor of rgb) {
    let dentro_caixa = document.createElement('div')
    dentro_caixa.classList.add('dentro')
    dentro_caixa.innerHTML = cor
    caixa.appendChild(dentro_caixa)
}