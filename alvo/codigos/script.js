const p_tempo = document.querySelector('#tempo')
const btn_limpar = document.querySelector('#limpar')
const p_pontuacao = document.querySelector('#pontuacao')
const div_tela = document.querySelector('#tela')

let largura_tela = div_tela.offsetWidth
let altura_tela = div_tela.offsetHeight
let tamanho_bola = 25
let tempo = 60
let pontuacao = 0
let lista_bolas = []

const criar_id=()=>{
    return Date.now()+'_'+Math.floor(Math.random() * (9999999999999999999999999999999999 - 0) + 0)
}
const pos_aleatoria=(tamanho_tela,tamanho_bola)=>{
    return Math.floor(Math.random() * (tamanho_tela-(tamanho_bola+10)))
}
const mostrar_tempo=(vel=1)=>{
    if (tempo >= 0) {
        let minutos = Math.floor(tempo/60)<10?`0${Math.floor(tempo/60)}`:Math.floor(tempo/60)
        let segundos = Math.trunc(tempo%60)<10?`0${Math.trunc(tempo%60)}`:Math.trunc(tempo%60)
        p_tempo.innerHTML = `${minutos}:${segundos}`
        tempo -= vel
    } else {
        clearInterval(contagem)
    }
}
const mostrar_pontuacao=(pontos)=>{
    pontos = pontos.toString()
    if (pontos.length < 2) {
        pontos = '00' + pontos
    } else if (pontos.length < 3) {
        pontos = '0' + pontos  
    }
    p_pontuacao.innerHTML = pontos
}
const iniciar_contagem=()=>{
    contagem = setInterval(mostrar_tempo,1000)
}
const criar_bola=(x,y,id)=>{
    let bola = document.createElement('div')
    bola.setAttribute('style',`transform-origin: center center; position: absolute; background-color: yellow; border: 2px solid black; border-radius: 50%; width: ${tamanho_bola}px; height: ${tamanho_bola}px; left: ${x}px; top: ${y}px;`)
    bola.setAttribute('id',id)
    bola.addEventListener('click', ()=>{
        if (pontuacao == 0 && tempo > 0) {
            iniciar_contagem()
            pontuacao++
            mostrar_pontuacao(pontuacao)
            lista_bolas.push(new Bola)
            lista_bolas[0].remover()
        } else if (tempo > 0) {
            pontuacao++
            mostrar_pontuacao(pontuacao)
            lista_bolas.push(new Bola)
            lista_bolas[0].remover()
        }
    })
    div_tela.appendChild(bola)
}
const criar_centro=(x=(largura_tela-tamanho_bola)/2,y=(altura_tela-tamanho_bola)/2)=>{
    lista_bolas.push(new Bola(x,y))
}
window.addEventListener('resize', ()=>{
    largura_tela = div_tela.offsetWidth
    altura_tela = div_tela.offsetHeight
})
class Bola {
    constructor(x=pos_aleatoria(largura_tela,tamanho_bola),y=pos_aleatoria(altura_tela,tamanho_bola),id=criar_id()) {
        this.posicaox = x
        this.posicaoy = y
        this.id = id
        criar_bola(x,y,id)
        this.eu = document.getElementById(id)
    }
    remover=()=>{
        this.eu.remove()
        lista_bolas = lista_bolas.filter((bola)=>{
            if (bola.id != this.id) {
                return bola
            }
        })
    }
}
btn_limpar.addEventListener('click', ()=>{
    clearInterval(contagem)
    tempo = 60
    pontuacao = 0
    lista_bolas.map((bola)=>{
        bola.remover()
    })
    criar_centro()
    mostrar_tempo()
})
criar_centro()
mostrar_tempo()
var contagem = setInterval(mostrar_tempo,1000)
clearInterval(contagem)