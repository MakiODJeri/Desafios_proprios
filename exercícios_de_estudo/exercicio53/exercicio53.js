const total_bolas = document.querySelector('#total_de_bolas')
const input_num_bolas = document.querySelector('#num_de_bolas')
const btn_adci = document.querySelector('#adci_bolas')
const btn_rmvr = document.querySelector('#rmvr_tudo')
const tela = document.querySelector('#tela_bolas')
let largura_tela = tela.offsetWidth
let altura_tela = tela.offsetHeight
let lista_bolas = []
let b_total = 0000
let contid = 1

const dar_id=()=>{
    let nome = 'bola'
    nome += contid
    contid++
    return nome
}
const mostrar_total=(num)=>{
    num = num.toString()
    while (num.length < 4) {
        num = `0${num}`
    }
    total_bolas.innerHTML = num
}

class Bola {
    constructor(lista_bolas,tela) {
        this.tamanho = Math.round(Math.random() * (60 - 20) + 20) 
        this.r = Math.round(Math.random() * (255 - 0) + 0)  
        this.g = Math.round(Math.random() * (255 - 0) + 0)  
        this.b = Math.round(Math.random() * (255 - 0) + 0) 
        this.posicaox = Math.round(Math.random() * (largura_tela-this.tamanho))
        this.posicaoy = Math.round(Math.random() * (altura_tela-this.tamanho)) 
        this.velocidadex = Math.round(Math.random() * (2 - 0.5) + 0.5)
        this.velocidadey = Math.round(Math.random() * (2 - 0.5) + 0.5)
        this.direcaox = Math.round(Math.random() * (10 - 1) + 1)<5?1:-1
        this.direcaoy = Math.round(Math.random() * (10 - 1) + 1)<5?1:-1
        this.tela = tela
        this.lista_bolas = lista_bolas
        this.id = dar_id()
        this.desenhar()
        this.controle=setInterval(this.controlar,10)
        this.eu=document.querySelector(`#${this.id}`)
    }
    minha_posicao=()=>{
        return this.lista_bolas.indexOf(this)
    }
    remover=()=>{
        clearInterval(this.controler)
        lista_bolas.filter((bola)=>{
            if (bola.id!=this.id) {
                return bola
            }
        })
        this.eu.remove()
        mostrar_total(b_total)
    }
    desenhar=()=>{
        const div_bola = document.createElement('div')
        div_bola.setAttribute('id',this.id)
        div_bola.setAttribute('class','bolas')
        div_bola.setAttribute('style',`left: ${this.posicaox}px; top: ${this.posicaoy}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background: rgba(${this.r},${this.g},${this.b});`)
        tela.appendChild(div_bola)
    }
    colisao_bordas=()=>{
        if (this.posicaox+this.tamanho >= largura_tela) {
            this.direcaox = -1
        } else if (this.posicaox <= 0) {
            this.direcaox = 1
        }
        if (this.posicaoy+this.tamanho >= altura_tela) {
            this.direcaoy = -1
        } else if (this.posicaoy <= 0) {
            this.direcaoy = 1
        }
    }
    controlar=()=>{
        this.colisao_bordas()
        this.posicaox += this.direcaox * this.velocidadeX
        this.posicaoy += this.direcaoy * this.velocidadey
        this.eu.setAttribute('style',`left: :${this.posicaox}px; top: ${this.posicaoy+altura_tela/1.5}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background: rgba(${this.r},${this.g},${this.b});`)
        if (this.posicaox > largura_tela || this.posicaoy > altura_tela) {
            this.remover()
        }
    }
}
window.addEventListener('resize', ()=>{
    largura_tela = tela.offsetWidth
    altura_tela = tela.offsetHeight
})
btn_adci.addEventListener('click', ()=>{
    if (input_num_bolas.value.length > 0) {
        b_total = Number(b_total) + Number(input_num_bolas.value<0?input_num_bolas.value*=-1:input_num_bolas.value)
        input_num_bolas.value = ''
        for (let c=0;c<b_total;c++) {
            lista_bolas.push(new Bola(lista_bolas,tela))
        }
        mostrar_total(b_total)
    }
})
btn_rmvr.addEventListener('click', ()=>{
    if (b_total > 0) {
        b_total = 0
        lista_bolas.map((bola)=>{
            bola.remover()
        })
    }
})