function pet(nome='desconhecido',idade=0,raca='desconhecida',peso=0) {
    this.nome = nome
    this.idade = idade
    this.raca = raca
    this.peso = peso
    this.dado_anonimo=function(){
        setTimeout(function(){
            console.log('================================')
            console.log('Nome: '+this.nome)
            console.log('Idade: '+this.idade+' anos')
            console.log('Raça: '+this.raca)
            console.log('Peso: '+this.peso+'kg')
            console.log('================================')
        },2000)
    }
    this.dado_arrow=function(){
        setTimeout(()=>{
            console.log('================================')
            console.log('Nome: '+this.nome)
            console.log('Idade: '+this.idade+' anos')
            console.log('Raça: '+this.raca)
            console.log('Peso: '+this.peso+'kg')
            console.log('================================')
        },2000)
    }
} 
const pt1=new pet('Maike',3,'pinscher',8)
pt1.dado_anonimo()
pt1.dado_arrow()