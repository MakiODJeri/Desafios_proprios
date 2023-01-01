/*const team1 = {
    nome: 'Abutres',
    membros: [
        'Arthur',
        'Balu',
        'Carina',
        'Dante',
        'Rubens'
    ]
}
function showAgents ({nome,membros}) {
    console.log('Equipe: ' + nome)
    console.log('======================================')
    for (i in membros) {
        console.log('Agente: ' + membros[i])
    }
}
showAgents(team1)*/
/*const showTeam = (name,...players) => {
    console.log('Equipe: ' + name)
    console.log('======================================')
    for (i in players) {
        console.log('Agente: ' + players[i])
    }
}
showTeam('Abutres','Arthur','Carina','Dante','Balu','Rubens')*/
/*const randomNumbersGenerator = (min,max,quanti=1) => {
    let numList = []
    for (let i = 0; i < quanti; i++) {
        numList.push(Math.round(Math.random() * (max - min) + min))
    }
    return numList
}
const numList = randomNumbersGenerator(1,50,10)
console.log(numList)
console.log(Math.max(...numList))*/
/*const keyboard = {layout:65,keycaps:'abs',switches:'gateron red'}
const keyboardClone1 = {...keyboard}
const keyboardClone2 = keyboard*/

class Keyboard {
    constructor (layout,keycaps,switches) {
        this.layout = layout
        this.keycaps = keycaps
        this.switches = switches
    }
    info() {
        console.log('Layout: ' + this.layout)
        console.log('Keycaos: ' + this.keycaps)
        console.log('Switches: ' + this,switches)
    }
}
class Wireless extends Keyboard {
    constructor (layout,keycaps,switches,conectivity,battery) {
        super(layout,keycaps,switches)
        this.conectivity = conectivity
        this.battery = battery
    }
}

const keyboard1 =new Wireless(65,'pbt','Glorious Holy Pandas','2.4 ghz',8000)
const keyboard2 = keyboard1
