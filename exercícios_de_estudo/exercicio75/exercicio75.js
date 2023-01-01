const randomNumbersGenerator = (min,max,quanti=1) => {
    let numList = []
    for (let i = 0; i < quanti; i++) {
        numList.push(Math.round(Math.random() * (max - min) + min))
    }
    if (quanti > 1) {
        return numList
    }
    return numList[0]
}
shoppingCart = [
    {
        name: 'Coiled cable',price: randomNumbersGenerator(1,50)
    },
    {
        name: 'Krytox',price: randomNumbersGenerator(1,50)
    },
    {
        name: 'Switches',price: randomNumbersGenerator(1,50)
    },
    {
        name: 'Keycaps',price: randomNumbersGenerator(1,50)
    },
    {
        name: 'Switch opener',price: randomNumbersGenerator(1,50)
    }
]

const totalPrice = list => {
    return list.reduce((acc,{price}) => {
        return acc += price
    },0)
}
console.log(shoppingCart)
console.log(totalPrice(shoppingCart))