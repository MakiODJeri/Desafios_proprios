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
        if (bfuncao == 1) {
            this.funcao = 'Esquentar'
        } else if (bfuncao == 2) {
            this.funcao = 'Criar'
        } else if (bfuncao == 3) {
            this.funcao = 'Consertar'
        } else {
            this.funcao = '??'
        }
        this.nome = bnome
        this.cor = bcor
    }
}
let fornalha=new Bloco('fornalha','cinza',1)