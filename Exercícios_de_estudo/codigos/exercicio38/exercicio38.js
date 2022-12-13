class Carro{
    constructor(nome='??',portas='??'){ //classe PAI / BASE
        this.nome = nome
        this.cor = undefined
        this.portas = portas
        this.ligado = false
        this.vel = 0
    }
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }
    setCor=function(cor='??'){
        this.cor = cor
    }
}

class Militar extends Carro { //Classe FILHO
    constructor(nome='??',portas='??',blindagem='??',municao='??'){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }
    atirar=function(){
        if (this.municao > 0) {
            this.municao--
        }
    }
}

let lista_carros = []
let c = 1
const mostrar=(tipo=0)=>{
    console.log('========================')
    lista_carros.map((car)=>{
        console.log(`Nome: ${car.nome}`)
        console.log(`Cor: ${car.cor}`)
        console.log(`Portas: ${car.portas}`)
        console.log(`Ligado: ${car.ligado?'Sim':'Não'}`)
        console.log(`Vel: ${car.vel}`)
        console.log(`Blindagem: ${car.blindagem}`)
        console.log(`Municao: ${car.municao}`)
        console.log('========================')
    })
}
const criar_carro=(cnome='??',cportas=2,tipo=0,ccor='#ffff',cblindagem='??',cmunicao=0)=>{
    let carro = 'carro'
    carro += c
    if (tipo == 1) {
        carro =new Carro(cnome,cportas)
        carro.setCor(ccor)
        lista_carros.push(carro)
        c++
    } else if (tipo == 2) {
        carro =new Militar(cnome,cportas,cblindagem,cmunicao)
        carro.setCor(ccor)
        lista_carros.push(carro)
        c++
    }
}
// 1 == Base
// 2 == Militar
criar_carro('Legal',4,1,'#fcf')
criar_carro('Bacana',1,2,'#ff4','Obsidian',64)
mostrar()
console.log(lista_carros)
