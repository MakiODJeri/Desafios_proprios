/*class Character {
    #nex = 5
    constructor({name, ordemClass}) {
        this.name = name
        this.ordemClass = ordemClass
    }
    incrementNex() {
        this.#nex++
    }

}
const character1 = new Character ({name: 'Arthur',ordemClass: 'Specialist'})
character1.incrementNex()*/
/*const to = promise => promise
    .then(res => [null,res])
    .catch(err => [err])
const remove = (rmvMember) => team = team.filter(member => member != rmvMember)
const removeFromTeam = async (rmvMember) => {
    const [err] = await to(remove(rmvMember))
    if (err) {
        return console.log(err)
    }
    console.log('Removed')
}
const createCharacter = ({name,ordemClass,nex}) => ({
    name,
    ordemClass,
    nex
})
let team = []
team.push(createCharacter({name: 'Amelie',ordemClass: 'Ocultist',nex: 5}))
team.push(createCharacter({name: 'Olevier',ordemClass: 'Specialist',nex: 5}))
team.push(createCharacter({name: 'Chico',ordemClass: 'Specialist',nex: 40}))
team.push(createCharacter({name: 'Lírio',ordemClass: 'Fighter', nex: 40}))
team.push(createCharacter({name: 'Dara',ordemClass: 'Specialist', nex: 40}))
removeFromTeam(team[4])
console.log(team)*/

const theNum = 1
const combineFuncs = (num,...funcs) => funcs.reduce((acc, curFunc) => curFunc(acc),num)
const addTen = num => num + 10
const addOneHundred = num => num + 100
const negative = num => num * -1
const half = num => num / 2
const double = num => num * 2
console.log(combineFuncs(theNum,addTen,negative,double,addOneHundred,half))