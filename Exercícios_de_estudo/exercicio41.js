class Enemy{
    static alerta=false
    constructor(pv,dano){
        this.pv = pv
        this.dano = dano
    }
    alertar(){
        Enemy.alerta = true
    }
    info(){
        console.log(`PV: ${this.pv}`)
        console.log(`Dano: ${this.dano}`)
        console.log(`Alerta: ${Enemy.alerta?'Está':'Não está'}`)
        console.log(`Grupo: ${e_grupo(this.num_enemies)}`)
        console.log('=====================')
    }
}
class Grupo extends Enemy{
    constructor(pv,dano,num_enemies){
        super(pv,dano)
        this.num_enemies = num_enemies
    }
}
const e_grupo=(val)=>{
    if (val == undefined) {
        return 'Não é um grupo'
    } else {
        return `${val} inimigos`
    }
}
const zumbi =new Enemy(15,3)
const lobo = new Enemy(10,3)
const morcego =new Grupo(5,1,5)
//lobo.alertar()
zumbi.info()
lobo.info()
morcego.info()