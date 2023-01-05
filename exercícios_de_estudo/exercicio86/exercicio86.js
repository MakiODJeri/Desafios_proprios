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

class Player {
    constructor({name,team}) {
        this.name = name
        this.team = team
        this.life = 20
        this.cash = 1000
        this.weapons = {knife: 20, pistol: 4.5}
    }
}

const newPlayer = ({name,team}) => ({
    name,
    team,
    life: 20,
    cash: 1000,
    weapons: {knife: 20, pistol: 4.5}
})

const p1 =new Player ({name: 'Magistrada', team: 'CT'})
const p2 = newPlayer ({name: 'DuduzinhoGameplays', team:'TR'})
console.log(p1)
console.log(p2)
