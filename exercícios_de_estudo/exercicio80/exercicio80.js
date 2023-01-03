/*const createCharacter = function(name,race,...items) {
    name = name,
    level = 1,
    race = race,
    stats = {lp: race=='Giant'?10:5, vl: race=='Warewolf'?6:3, pw: race=='Oni'?3.5:1.5, df: race=='Slayer'?2.5:.5},
    upPoints = 0,
    items = items,
    this.AddItems = function(...addItems) {
        addItems.forEach((item)=> {
            if (items.length <= stats.lp * 2) {
                items.push(item)
                console.log('==================================')
                console.log(item + ' adicionado(a)')
            } else {
                console.log('==================================')
                console.log('Impossivel adicionar')
            }
        })
    },
    this.StatUp = function(stat,UpPoints) {
        if (UpPoints <= upPoints) {
            if (stat == 'lp') {
                stats.lp += UpPoints
            } else if (stat == 'vl') {
                stats.vl += UpPoints
            } else if (stat == 'pw') {
                stats.pw += UpPoints
            } else if (stat == 'df') {
                stats.df += UpPoints
            }
        }
    },
    this.LevelUp = function() {
        level += 1
        upPoints += 3
    },
    this.ShowStats = function() {
        console.log('==================================')
        console.log(`Player: ${name}`)
        console.log(`Race: ${race}`)
        console.log(`Level: ${level}`)
        console.log(`Life Points: ${stats.lp}`)
        console.log(`Velocity: ${stats.vl}`)
        console.log(`Power Attack: ${stats.pw}`)
        console.log(`Defense: ${stats.df}`)
        console.log(`Up Points: ${upPoints}`)
    }
    this.ShowItems = function() {
        console.log('==================================')
        console.log(`Player: ${name}`)
        console.log(`Free Space: ${stats.lp * 2 - items.length}`)
        console.log(`Items: ${items}`)
    }
}
const player1 =new createCharacter('Tarik','WareWolf','Espada','Lanterna','Comida')*/

class CreateCharacter {
    constructor (name,race,items=[]) {
        this.name = name
        this.race = race
        this.level = 1
        this.stats = {lp: race=='Giant'?10:5, vl: race=='Warewolf'?6:3, pw: race=='Oni'?3.5:1.5, df: race=='Slayer'?2.5:.5}
        this.upPoints = 0
        this.items = items
    }
    ShowStats() {
        console.log('==================================')
        console.log(`Player: ${this.name}`)
        console.log(`Race: ${this.race}`)
        console.log(`Level: ${this.level}`)
        console.log(`Life Points: ${this.stats.lp}`)
        console.log(`Velocity: ${this.stats.vl}`)
        console.log(`Power Attack: ${this.stats.pw}`)
        console.log(`Defense: ${this.stats.df}`)
        console.log(`Up Points: ${this.upPoints}`)
    }
    ShowItems() {
        console.log('==================================')
        console.log(`Player: ${this.name}`)
        console.log(`Free Space: ${this.stats.lp * 2 - this.items.length}`)
        console.log(`Items: ${this.items}`)
    }
    LevelUp() {
        this.level += 1
        this.upPoints += 3
    }
    StatUp(stat,upPoints) {
        if (upPoints <= this.upPoints) {
            if (stat == 'lp') {
                this.stats.lp += upPoints
            } else if (stat == 'vl') {
                this.stats.vl += upPoints
            } else if (stat == 'pw') {
                this.stats.pw += upPoints
            } else if (stat == 'df') {
                this.stats.df += upPoints
            }
            this.upPoints -= upPoints
        }
    }
    AddItems(...addItems) {
        addItems.forEach((item)=> {
            if (this.items.length <= this.stats.lp * 2) {
                this.items.push(item)
                console.log('==================================')
                console.log(item + ' adicionado(a)')
            } else {
                console.log('==================================')
                console.log('Impossivel adicionar')
            }
        })
    }
}
const player2 =new CreateCharacter('Mike','Giant',['Axe','Chestplate','Lamp','Anvil'])
class CreateRebirthCharacter extends CreateCharacter {
    constructor (name,race,items) {
        super(name,race,items)
        this.upPoints += 30
    }
}
const rebirthPlayer3 =new CreateRebirthCharacter('Gustavo','Oni',['Bow','Turtle Helmet','Trident','Arrow',])
rebirthPlayer3.ShowStats()