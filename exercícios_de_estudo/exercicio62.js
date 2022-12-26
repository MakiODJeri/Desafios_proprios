//Escopo de função
let age = new Date().getFullYear() - 2006
/*function worldCupAge (actual_age) {
    let worldCupYear = new Date().getFullYear()
    let c = 0
    while (worldCupYear < 2026) {
        worldCupYear++
        c++
    }
    let age = actual_age + c
    console.log(age)
}
worldCupAge(age)
console.log(age)*/
//Escopo Léxico
const spin = function () {
    let position = 0
    const left = function () {
        position -= 90
    }
    const right = function () {
        position += 90
    }
    while (Math.floor(Math.random() * (11 - 1) + 1) > 5) 
    {
        const left = function () {
            console.log('-90')
        }
        const right = function () {
            console.log('+90')
        }
        if (Math.floor(Math.random() * (11 - 1) + 1) > 5) {
            right()
        } else {
            left()
        }
    }
    return position 
}
console.log(spin())