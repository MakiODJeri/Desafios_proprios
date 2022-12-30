//Explorando Prototypes
const customPrototype = {
    Info() {
        return `Nome: ${this.nome}
Nex ${this.nex}
Classe: ${this.classe}
Trilha: ${this.trilha}
==================================`
    }
}

/*function Agente(nome,nex,classe,trilha=undefined) {
    this.nome = nome
    this.nex = nex
    this.classe = classe
    this.trilha = trilha
}
Agente.prototype = customPrototype

const Arthur = new Agente('Arthur Cervero',55,"Especialista",'Atirador de elite')
console.log(Arthur.Info())*/

/*const Rubens = Object.create(customPrototype)
Rubens.nome = 'Rubens'
Rubens.nex = 50
Rubens.classe = 'Especialista'
Rubens.trilha = 'Médico de campo'
console.log(Rubens.Info())*/

const Xande = {
    nome: 'Alexandre',
    nex: 40,
    classe: 'Ocultista',
    trilha: 'Lâmina paranormal'
}
const Guizo = {
    nome: 'Guilherme',
    nex: 40,
    classe: 'Ocultista',
    trilha: 'Graduado'
}
Object.setPrototypeOf(Xande,customPrototype)
console.log(Xande.Info())

function isPrototypeOfCustomPrototype(obj) {
    let bol = ''
    if (customPrototype.isPrototypeOf(obj)) {
        bol = 'é' 
    } else {
        bol = 'não é'
    }
    console.log(`${obj.nome} ${bol} um Prototype de customPrototype`)
}
isPrototypeOfCustomPrototype(Xande)
isPrototypeOfCustomPrototype(Guizo)