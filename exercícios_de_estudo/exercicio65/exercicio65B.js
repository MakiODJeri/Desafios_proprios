/*Closure é quando uma função "lembra" de seu escopo léxico mesmo quando ela é executada fora desse escopo léxico*/
const fora = require ('./exercicio65A')
let x = 100
console.log(fora())