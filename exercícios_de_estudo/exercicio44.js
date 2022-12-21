class inimigoBase {
    constructor(tipo,pv,ataque){
        if (this.constructor===inimigoBase){
            throw new TypeError('Não é possível instanciar esta classe')
        }
        this.tipo = tipo
        this.pv = pv
        this.ataque = ataque
    }
    receber_ataque(dano){
        if (this.pv > 0){
            this.pv -= dano
        }
    }
    info(){
        console.log(`Tipo: ${this.tipo}`)
        console.log(`PV: ${this.pv}`)
        console.log(`Dano ataque: ${this.ataque}`)
    }
}
class tank extends inimigoBase {
    constructor(pv,pow,res) {
        super('Tank',pv,pow)
        this.resistencia = res
    }
    receber_ataque(dano){
        if (this.pv > 0){
            this.pv -= (this.resistencia - dano)
        }
    }
    info(){
        super.info()
        console.log(`Resistencia: ${this.resistencia}`)
        console.log('==============================')
    }
}
class suporte extends inimigoBase {
    constructor(pv,pow,hel){
        super('Suporte',pv,pow)
        this.cura = hel
    }
    curar(allay){
        allay.pv += this.cura
    }
    info(){
        super.info()
        console.log(`Cura: ${this.cura}`)
        console.log('==============================')
    }
}
const parede =new tank(15,2,3)
const medica =new suporte(8,1,2.5)
parede.info()
medica.info()