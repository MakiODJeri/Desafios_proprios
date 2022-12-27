/*const btn_oi = document.querySelector('#btn_oi')
const gerarAleatorio = (min=1,max=20) => Math.floor(Math.random() * ((max + 1) - min) + min)
btn_oi.addEventListener('click', () => {
    console.log('Arrow function')
    console.log(this)
    console.log('================================')
})
btn_oi.addEventListener('mouseleave', function () {
    console.log('Function')
    console.log(this)
    console.log('================================')
})*/
class CreateNewPlayer {
    constructor (name) {
        this.name = name
        this.lp = 20
    }
    printPlayerInfoFunction () {
        setTimeout( function print() {
            console.log(this.name)
            console.log(this.lp)
            console.log('===========================')
        },1000)
    }
    printPlayerInfoArrowFunction () {
        setTimeout( ()=>{
            console.log(this.name)
            console.log(this.lp)
            console.log('===========================')
        },1000)
    }
}
const Player_1 = new CreateNewPlayer('Wario')
Player_1.printPlayerInfoFunction()
Player_1.printPlayerInfoArrowFunction()