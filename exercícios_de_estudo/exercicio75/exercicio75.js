const randomNumbersGenerator = (min,max,quanti=1) => {
    let numList = []
    for (let i = 0; i < quanti; i++) {
        numList.push(Math.round(Math.random() * ((max + 1) - min) + min))
    }
    if (quanti > 1) {
        return numList
    }
    return numList[0]
}
/*shoppingCart = [
    {
        name: 'Coiled cable',price: randomNumbersGenerator(1,50), quantity: 1
    },
    {
        name: 'Krytox',price: randomNumbersGenerator(1,50), quantity: 2
    },
    {
        name: 'Switches',price: randomNumbersGenerator(1,50), quantity: 2
    },
    {
        name: 'Keycaps',price: randomNumbersGenerator(1,50), quantity: 1
    },
    {
        name: 'Switch opener',price: randomNumbersGenerator(1,50), quantity: 1
    }
]

const totalPrice = list => {
    return list.reduce((acc,{price,quantity}) => {
        return acc += price * quantity
    },0)
}
console.log(shoppingCart)
console.log(totalPrice(shoppingCart))*/
/*const nameList = ['Mike','Maria','Tarik','Jerry','Camile','Lucia','David','Geral','Matheus','Carlos']
const countNames = List => List.reduce((count,curName)=>{
    const first = curName[0].toLocaleLowerCase()
    if (count[first]) {
        count[first]++
    } else {
        count[first] = 1
    }
    return count
},{})
console.log(countNames(nameList))*/

/*const persons = [
    {name:'Daniel', age:randomNumbersGenerator(20,40)},
    {name:'Miguel', age:randomNumbersGenerator(20,40)},
    {name:'Henrique', age:randomNumbersGenerator(20,40)},
    {name:'Cris', age:randomNumbersGenerator(20,40)},
    {name:'Felix', age:randomNumbersGenerator(20,40)},
    {name:'Robert', age:randomNumbersGenerator(20,40)},
    {name:'Bea', age:randomNumbersGenerator(20,40)},
    {name:'Luz', age:randomNumbersGenerator(20,40)},
    {name:'Alex', age:randomNumbersGenerator(20,40)},
    {name:'Miriam', age:randomNumbersGenerator(20,40)}
]
console.log(persons)

const personPerAge = List => List.reduce((count,{age,name})=>{
    if (!count[age]) {
        count[age] = []
    }
    count[age].push(name)
    return count
},{})
console.log(personPerAge(persons))*/

const numbers = randomNumbersGenerator(-50,50,20)
console.log(numbers)
const doublePositive = List => List.reduce((dblPositiveCount,curNumber) => {
    if (curNumber > 0) {
        dblPositiveCount.push(curNumber * 2)
    }
    return dblPositiveCount
}, [])
console.log(doublePositive(numbers))