/*const add = num1 => num2 => num1 + num2
const increment = add(1)
console.log(increment(10))*/
const getDiscount = disc => val => Math.round(val * disc)
const discountFivePercent = getDiscount(.05)
const discountTenPercent = getDiscount(.10)
const discountFifteenPercent = getDiscount(.15)
const discountTwentyPercent = getDiscount(.20)
const discountTwentyFivePercent = getDiscount(.25)
console.log(discountFivePercent(274))
console.log(discountTenPercent(274))
console.log(discountFifteenPercent(274))
console.log(discountTwentyPercent(274))
console.log(discountTwentyFivePercent(274))