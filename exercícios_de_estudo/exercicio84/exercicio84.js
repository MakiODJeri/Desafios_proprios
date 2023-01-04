const showBaseStats = {
    logCharacterStats() {
        console.log('==================================')
        console.log(`name: ${this.name}, race: ${this.race}
Atributes:
        Life Points: ${this.atributes.lp}
        Power: ${this.atributes.pw}
        Defense: ${this.atributes.df}
        Speed: ${this.atributes.se}`)
    }
}
const createCharacter = ({name,race,atributes}) => {
    const character = Object.create(showBaseStats)
    character.name = name
    character.race = race
    character.atributes = atributes
    return character
}
const player1 = createCharacter({name:'Mike', race:'Giant', atributes: {lp: 15, pw: 1.5, df: 5, se: 1}})
player1.logCharacterStats()