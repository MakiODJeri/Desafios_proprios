/*function Player({name,life,weapon}) {
    this.name = name
    this.life = life
    this.weapon = weapon
}
Player.prototype.tradeWeapon = function(weapon) {
    this.weapon = weapon
}
const p1 =new Player ({name: 'Mario',life: 20, weapon: 'Hammer'})
Player.prototype.dance = function() {
    console.log(`${this.name} is dancing!!`)
}
p1.tradeWeapon('Fire Flower')
p1.dance()*/

/*class Player {
    #playersCounter = 0
    constructor({name,team}) {
        this.name = name
        this.team = team
        this.life = 20
        this.cash = 1000
        this.weapons = {knife: 20, pistol: 4.5}
    }
    incrementPlayerCounter() {
        if (this.#playersCounter < 10) {
            this.#playersCounter++
        }
    }
}

const newPlayer = ({name,team}) => {
    let playersCounter = 0
    return {
        name,
        team,
        life: 20,
        cash: 1000,
        weapons: {knife: 20, pistol: 4.5},
        incrementPlayerCounter: () => playersCounter++
    }
}

const p1 =new Player ({name: 'Magistrada', team: 'CT'})
const p2 = newPlayer ({name: 'DuduzinhoGameplays', team:'TR'})
console.log(p1)
console.log(p2)*/

/*const cow = {
    cowSound () {
        return 'Muuu'
    }
}
const chicken = {
    chickenSound () {
        return 'Popo'
    }
}
const pig = {
    pigSound () {
        return 'Oink'
    }
}
const animalsSound = {
    ...cow,
    ...pig
}
console.log(animalsSound.pigSound())*/

/*const videoGameCollection = [
    {console: 'Nintendo Entertainment System', totalGames: 26},
    {console: 'Sega Genesis', totalGames: 34},
    {console: 'Playstation One', totalGames: 38},
    {console: 'Nintendo 64', totalGames: 30},
    {console: 'Playstation 2', totalGames: 51}
]
console.log(videoGameCollection.reduce((acc, {console, totalGames}) => {
    return acc += `${console}: ${totalGames} jogos\n`
}, ''))*/

/*const peopleList = []
const newPeople = ({name, age}) => ({
    name,
    age
})
const returnRanNum = (min,max) => Math.floor(Math.random() * ((max + 1) - min) + min)
const peopleListPushing = (x=1) => {
    for (let i = 0; i < x; i++) {
        peopleList.push(newPeople({name: '', age: returnRanNum(20,40)}))
    }
}
const returnAgeObj = (list) => list.reduce((acc, {age}) => {
    acc[age]? acc[age] += 1 : acc[age] = 1
    return acc
}, {})
peopleListPushing(10)
console.log(peopleList)
console.log(returnAgeObj(peopleList))*/

/*const pcProto = {
    logPcSpecs () {
        console.log(`Processador: ${this.cpu} \nPlaca de vídeo: ${this.gpu} \nMemória ram: ${this.ram}`)
    }
}
const newPc = ({cpu,gpu,ram}) => {
    const pc = Object.create(pcProto)
    pc.cpu = cpu 
    pc.gpu = gpu 
    pc.ram = ram 
    return pc 
}
const pc1 = newPc({cpu: '13600k', gpu: '3070', ram: 16})
pc1.logPcSpecs()*/

/*const githubUser = ({user}) => ({
    user,
    url: 'https://api.github.com/users/' + user
})

const KauaOS = githubUser({user: 'MakiODJeri'})

fetch(KauaOS.url)
    .then(res => ({msg: res.status=='200'?'Conexão feita':'Conexão impossível', user: res.json()}))
    .then(({msg,user}) => console.log(msg))
    .catch(err => console.log(err))*/

function Mouse ({model,sensor,switches}) {
    this.model = model
    this.sensor = sensor
    this.switches = switches
}
Mouse.prototype.logSpecs = function () {
    consoe.log(`Model: ${this.model} \nSensor: ${this.sensor} \nSwitches: ${this.switches}`)
}
function Wireless ({model,sensor,switches,battery}) {
    Mouse.call(this, {model: model, sensor: sensor, switches: switches})
    this.battery = battery
    this.wirelessOn = false
    this.toggleOnOff = function() {
        this.wirelessOn = this.wirelessOn? false : true
    }
}
Wireless.prototype = Object.create(Mouse.prototype)
const mouse1 = new Mouse({model: 'Roccat Kone Pro', sensor: 'Owl Eye', switches: 'Roccat Optical'})
const mouse2 = new Wireless({model: 'Ninjutsu Sora', sensor:'PaW3395', switches: 'Huano Pink Dot', battery: '380mh'})
console.log(mouse1)
console.log(mouse2)