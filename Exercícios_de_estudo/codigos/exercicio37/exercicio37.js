const input_nome = document.querySelector('#nome')
const input_idade = document.querySelector('#idade')
const btn_add = document.querySelector('#adci')
const div_caixa = document.querySelector('#caixa')
let lista = []
const Pessoa={
    nome:'??',
    idade:0,
    getNome:function(){
        return this.nome
    },
    setNome:function(pnome='??'){
        this.nome = pnome
    },
    getIdade:function(){
        return this.idade
    },
    setIdade:function(pidade=0){
        this.idade = pidade
    },
    info:function(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
        console.log('========================================')
    },
    getinfo:function(){
        return `Nome: ${this.nome}, Idade: ${this.idade}`
    }
}
const apagar_input=()=>{
    input_nome.value = ''
    input_idade.value = ''
    input_nome.focus()
}
const criar_p=(para)=>{
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = para.getinfo()
    div_caixa.appendChild(paragrafo)
}
const adicionar_lista=(val_n='??',val_i=0)=>{
    let per = {Nome:'??',Idade:0}  
    per.Nome = val_n
    per.Idade = val_i
    lista.push(per)
    console.log(lista)
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
        const p = Pessoa
        p.setNome(val_nome)
        p.setIdade(val_idade)
        adicionar_lista(val_nome,val_idade)
        criar_p(p)
        apagar_input()
    }
})