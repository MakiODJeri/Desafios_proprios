const vals = [20,4,5,6,13,14,10]
const text = 'Ainda eu'
console.log('------------Iteradores------------')
console.log('==================================')
console.log('--------------Array---------------')
const itvals = vals[Symbol.iterator]()
const ittext = text[Symbol.iterator]()
for (let c = 0; c <= vals.length; c++) {
    console.log(itvals.next())
}
console.log('==================================')
console.log('--------------String--------------')
for (let c = 0; c <= text.length; c++) {
    console.log(ittext.next())
}