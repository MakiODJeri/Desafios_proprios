function recebed4() {
    let val = rolar(5)
    let forma = '#F0E11A'
    criarelementodivimagem(val, forma)
}
function recebed6() {
    let val = rolar(7)
    let forma = '#309948'
    criarelementodivimagem(val, forma)
}
function recebed8() {
    let val = rolar(9)
    let forma = '#3F1DAB'
    criarelementodivimagem(val, forma)
}
function recebed10() {
    let val = rolar(11)
    let forma = '#7E21A5'
    criarelementodivimagem(val, forma)
}
function recebed12() {
    let val = rolar(13)
    let forma = '#16A4D6'
    criarelementodivimagem(val, forma)
}
function recebed20() {
    let val = rolar(21)
    let forma = '#C81111'
    criarelementodivimagem(val, forma)
}
function rolar(max=1) {
    return Math.floor(Math.random() * (max - 1) + 1) 
}
function criarelementodivimagem(val=1, forma='black') {
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

