function rolar(max=1) {
    return Math.floor(Math.random() * (max - 1) + 1) 
}
function criarelementodivimagem(val=1, forma='black') {
    val = rolar(val)
    let tela = document.querySelector('div#tela1')
    if (tela.childElementCount > 0) {
        tela.removeChild(tela.firstElementChild)
    }
    let imagem = document.createElement('div')
    imagem.id = 'resposta'
    let strval = document.createElement('span')
    imagem.style.backgroundColor = forma
    strval.innerHTML = val
    res.innerHTML = val
    imagem.appendChild(strval)
    tela.appendChild(imagem)
}
let res = document.querySelector('strong#res')

