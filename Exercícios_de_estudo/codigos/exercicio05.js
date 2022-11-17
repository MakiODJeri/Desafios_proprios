let num1 = 2
let num2 = -2
let res = Math.floor(Math.random() * (num2 - num1) + num1)
switch (res) {
    case 2, 1 :
        console.log('positivo')
        break
    case -2, -1 :
        console.log('negativo')
        break
    default :
        console.log('zero')
}
console.log(res)