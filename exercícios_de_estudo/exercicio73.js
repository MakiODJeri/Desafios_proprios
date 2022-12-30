//Destructuring
//Destructuring em array
/*const RandomNumberListGenerator = function(max,min,length=1) {
    let numberList = []
    for (let i = 0; i < length; i++) {
        numberList.push(Math.round(Math.random() * ( max - min) + min))
    }
    console.log(numberList)
    return numberList
}
const numbers = RandomNumberListGenerator(1,20,4)
const someFirstNumbers = sum = (n1,n2) => n1 + n2*/
/*const firstNumbers = numbers.slice(0,2)
console.log(firstNumbers)
console.log(someFirstNumbers(firstNumbers[0],firstNumbers[1]))*/
/*const [firstNumber, secondNumber] = numbers
console.log(someFirstNumbers(firstNumber,secondNumber))*/
//Destructuring em objetos
const agente1 = {
    nome: 'Chico',
    idade: 53,
    nex: 40,
    classe: 'Especialista',
    trilha: 'Técnico'
}
const agente2 = {
    nome: 'Henri',
    idade: 25,
    nex: 100,
    classe: 'Ocultista',
    trilha: 'Flagelador'
}
const agente3 = {
    nome: 'Olivier',
    idade: 20,
    nex: 5,
    classe: 'Especialista',
    trilha: undefined
}
function getBirthYear(age) {
    return new Date().getFullYear() - age
}
function showAgentInfo(agent) {
    console.log(`${agent.nome} nasceu em ${getBirthYear(agent.idade)}, possui ${agent.nex}% de nex, da classe ${agent.classe}, ${agent.trilha!=undefined?`trilha ${agent.trilha}`:'ainda não possui trilha'}`)
}
showAgentInfo(agente1)
showAgentInfo(agente2)
showAgentInfo(agente3)