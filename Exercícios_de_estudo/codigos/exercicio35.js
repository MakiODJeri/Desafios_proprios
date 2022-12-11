//class Pessoa{
//    constructor(nome='??',cor='??',comida='??'){
//        this.nome=nome
//        this.cor_favorita=cor
//        this.comida_favorita=comida
//    }
//}
//let p1=new Pessoa('Tarik','Azul','Pizza')
//let p2=new Pessoa('Linnyker','Verde','Macarrão')
//console.log(`
//Nome: ${p1.nome}
//Cor favorita: ${p1.cor_favorita}
//Comida favorita: ${p1.comida_favorita}
//`)
//console.log(`
//======================================
//`)
//console.log(`
//Nome: ${p2.nome} 
//Cor favorita: ${p2.cor_favorita} 
//Comida favorita: ${p2.comida_favorita}
//`)
class Bloco{
    constructor(bnome='??',bcor='??',bfuncao=0) {
        this.Nome = bnome
        this.Cor = bcor
        if (bfuncao == 1) {
            this.funcao = 'Esquentar'
        } else if (bfuncao == 2) {
            this.funcao = 'Criar'
        } else if (bfuncao == 3) {
            this.funcao = 'Melhorar'
        } else {
            this.funcao = '??'
        }
    }
    info(){
        console.log(`Nome: ${this.Nome}`)
        console.log(`Cor: ${this.Cor}`)
        console.log(`Função: ${this.funcao}`)
        console.log('============================')
    }
    getNome(){
        return this.Nome
    }
    getCor(){
        return this.Cor
    }
    getFuncao(){
        return this.funcao
    }
    getInfo(){
        return [this.Nome,this.Cor,this.funcao]
    }
    setNome(bnome='??'){
        this.Nome = bnome
    }
    setCor(bcor='??'){
        this.Cor = bcor
    }
    setFuncao(bfuncao=0){
        if (bfuncao == 1) {
            this.funcao = 'Esquentar'
        } else if (bfuncao == 2) {
            this.funcao = 'Criar'
        } else if (bfuncao == 3) {
            this.funcao = 'Melhorar'
        } else {
            this.funcao = '??'
        }
    }
}
//Esquentar == 1
//Criar == 2
//Melhorar == 3
let b1=new Bloco('Fornalha','Cinza',1)
let b2=new Bloco('Stand de Poções','Amarelo',2)
let b3=new Bloco('Mesa de encantamento','Vermelho e Azul',3)
b1.info()
b2.info()
b3.info()
console.log(b1.getNome())
console.log(b2.getCor())
console.log(b3.getFuncao())
console.log(b1.getInfo())
b3.setNome('Crafting table')
b3.setCor('Marrom')
b3.setFuncao(2)
b3.info()