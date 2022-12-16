const input_nome = document.querySelector('#nome')
const input_idade = document.querySelector('#idade')
const btn_add = document.querySelector('#adci')
const div_caixa = document.querySelector('#caixa')
let cont = 1
let pessoas = []
//class Pessoa {
//     constructor (pnome='??',pidade=0) {
//        this.nome = pnome
//        this.idade = pidade
//     }
//     getNome(){
//        return this.nome
//    }
//
//    getIdade(){
//        return this.idade
//    }
//    setNome(pnome='??'){
//        this.nome = pnome
//    }
//    setIdade(pidade=0){
//        this.idade = pidade
//    }
//    Info(){
//        console.log(`Nome: ${this.nome}`)
//        console.log(`Idade: ${this.idade}`)
//    }
//}
function Pessoa(pnome='??',pidade=0) {
    this.nome = pnome,
    this.idade = pidade,
    this.getNome=function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    this.setNome=function(pnome='??'){
        this.nome = pnome
    },
    this.setIdade=function(pidade=0){
        this.idade = pidade
    },
    this.Info=function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}
const criar_nome=()=>{
    let nome = 'p'
    nome += cont
    return nome
}
const adci_caixa=(pos=0)=>{
    let infos = document.createElement('p')
    infos.innerHTML += `Nome: ${pessoas[pos].getNome()}, Idade: ${pessoas[pos].getIdade()}`
    div_caixa.appendChild(infos)
}
const adci_nomida=(v_n='??',v_i=0)=>{
    pessoas.push(criar_nome())
    pessoas[cont-1] =new Pessoa(v_n,v_i)
    adci_caixa(cont-1)
    input_nome.value = ''
    input_idade.value = ''
    input_nome.focus()
    console.log(pessoas)
    cont++
}
btn_add.addEventListener('click',()=>{
    const val_nome = input_nome.value 
    const val_idade = input_idade.value
    if (val_nome.length == 0 || val_idade.length == 0) {
        window.alert('Nome ou idade faltando digite em seus respectivos campos por favor.')
    } else if (val_idade < 0) {
        window.alert('Idade < 0, idade invalida digite outro valor.')
        input_idade.value = ''
        input_idade.focus()
    } else {
        adci_nomida(val_nome,val_idade)
    }
})