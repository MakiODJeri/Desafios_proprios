/*js
me = 'oi'
var me = 'Oi posso ser modificado a qualquer momento'
const me = 'Oi não posso ser modificado'
let me = 'Oi tente me mudar'*/

//Block Scope
//=====================================
/*if (true) {
    var dog1 = {name:'Mike',age:4}
    let dog2 = {name:'Jerry',age:2}
    const dog3 = {name:'Nick',age:6}
}
console.log(dog1)
//let e const fora do escopo do bloco {} == Reference Error
console.log(dog2)
console.log(dog3)*/

//Global Scope
//=====================================
/*let msgList = []
var msgVar = 'Ola'
msgList.push(msgVar)
let msgLet = 'Tiau'
msgList.push(msgLet)
const msgConst = 'Bonjuor'
msgList.push(msgConst)
for (i in msgList) {
    console.log(msgList[i])
}*/
/*msg = 'Hello'
console.log(global.msg)*/

//Function Scope
//=====================================
/*function showMsg() {
    msg = 'Oi'
    var msgVar = 'Hola'
}
showMsg()
console.log(msg)
console.log(msgVar)*/

//ES6: Import - Export
//=====================================
//main.js
/*import oi from ".exercicio71B.js";
console.log(oi)*/

//Inner Scope
//=====================================
/*const msgConst = 'Hola'
var msgVar = 'Hola'
let msgLet = 'Hola'
function showMsg() {
    const msgConst = 'Tiau'
    var msgVar = 'Tiau'
    let msgLet = 'Tiau'
    if (true) {
        const msgConst = 'Bonjour'
        var msgVar = 'Bonjour'
        let msgLet = 'Bonjour'
        console.log(msgConst)
        console.log(msgVar)
        console.log(msgLet)
    }
    console.log(msgConst)
    console.log(msgVar)
    console.log(msgLet)
}
showMsg()
console.log(msgConst)
console.log(msgVar)
console.log(msgLet)*/
//Lexical Scope
//=====================================
/*function create() {
    const msg = 'Hola'
    function show() {
        const msg = 'Tiau'
        console.log(msg)
    }
    return show
}
const m = create()
m()*/