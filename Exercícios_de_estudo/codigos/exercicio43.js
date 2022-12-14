class encantamentos_armadura{
    constructor(tipo,num_estantes){
        this.level =new Level_mesa(num_estantes) 
        this.encantamentos = []
        this.encantamentos.push('Mending','Unbreaking','Thorns')
        if (tipo == 1) {
            this.tipo = 'Capacete'
            this.encantamentos.push('Respiration','Aqua Affinity')
        } else if (tipo == 2) {
            this.tipo = 'Peitoral'
        } else if (tipo == 3) {
            this.tipo = 'Calças'
            this.encantamentos.push('Swift Sneak')
        } else {
            this.tipo = 'Botas'
            this.encantamentos.push('Feather Falling','Soul Speed')
        } 
        let c = 0
        this.encantamentos.map((en)=>{
            if (en !== 'Mending') {
                en += this.level.retorne_maxlv()
                this.encantamentos[c] = en
            } 
            c++
    })
    }
    info(){
        console.log(this.tipo)
        console.log(this.encantamentos)
    }
}
class Level_mesa{
    constructor(estantes){
        if (estantes>=9 && estantes<14){
            this.max_level=' II'
        }else if (estantes>=14){
            this.max_level=' III'
        }else{
            this.max_level=''
        }
    }
    retorne_maxlv(){
        return this.max_level
    }
}
const capacete_de_ouro =new encantamentos_armadura(1,18)
capacete_de_ouro.info()