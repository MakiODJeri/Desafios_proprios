// mão fechada == &#x270A
// mão v == &#x270C
// mão aberta == &#x1F91A
function recebe(esc) {
    exemcpu.innerHTML = '&#x2753'
    you = esc
    switch (you) { 
        case 1: 
            exemyou.innerHTML = '&#x270A'
            break
        case 2:
            exemyou.innerHTML = '&#x1F91A'
            break
        case 3:
            exemyou.innerHTML = '&#x270C'
    }
}
function joga() {
    if (you != 4) {
        cpu = Math.floor(Math.random() * (4 - 1) + 1)
        if (you == 3 && cpu == 1) {
            you = 0
        } else if (you == 1 && cpu == 3) {
            cpu = 0
        } else if (you == 0 && cpu != 1) {
            you = 3
        }
        switch (cpu) { 
            case 0: 
                exemcpu.innerHTML = '&#x270C'
                break
            case 1: 
                exemcpu.innerHTML = '&#x270A'
                break
            case 2:
                exemcpu.innerHTML = '&#x1F91A'
                break
            case 3:
                exemcpu.innerHTML = '&#x270C'
        }
        if (you > cpu) {
            pontos.you++
            ptyou.innerHTML = pontos.you
        } else if (you < cpu) {
            pontos.cpu++
            ptcpu.innerHTML = pontos.cpu
        }
    } else {
        window.alert('ERRO: Escolha uma das opções acima de "Jokenpô"')
    }
}
function limpar() {
    exemcpu.innerHTML = '&#x2753'
    exemyou.innerHTML = '&#x2753'
    ptyou.innerHTML = '0'
    ptcpu.innerHTML = '0'
    you = 0
    cpu = 0
    pontos.you = 0
    pontos.cpu = 0
}
let pontos = {you:0,cpu:0}
let you = 4
let cpu = 4
let exemyou = document.querySelector('div#exemyou')
let exemcpu = document.querySelector('div#exemcpu')
let ptyou = document.querySelector('strong#ptyou')
let ptcpu = document.querySelector('strong#ptcpu')