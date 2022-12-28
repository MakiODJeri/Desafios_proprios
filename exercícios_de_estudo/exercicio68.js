/*lista = [
    {
        type:'Mouse',brand:'Razer',color:'Black',price:130
    },
    {
        type:'Keyboard',brand:'CIY',color:'Black',price:240
    },
    {
        type:'Mouse Pad',brand:'Xray Pad',color:'White',price:200
    },
    {
        type:'Headphone',brand:'Kuba Audio',color:'Brown',price:400
    },
    {
        type:'Headphone',brand:'Edifier',color:'Black',price:350
    },
    {
        type:'Mouse',brand:'Pulsar',color:'Red',price:500
    },
    {
        type:'Keyboard',brand:'CIY',color:'Green',price:400
    },
    {
        type:'In Ear',brand:'Tangzu',color:'White',price:90
    }
]
const rType = (array,filter) => array.filter(obj => obj.type == filter)
const rBrand = (array,filter) => array.filter(obj => obj.brand == filter)
const rColor = (array,filter) => array.filter(obj => obj.color == filter)
const rPriceRange = (array,filter,minp,maxp) => array.filter(obj => obj.price >= minp && obj.price <= maxp)
function returnFilter (fun,array,filter='',minp=0,maxp=0) {
    return fun(array,filter,minp,maxp)
}
const filterList1 = returnFilter(rType,lista,'Mouse')
const filterList2 = returnFilter(rBrand,lista,'CIY')
const filterList3 = returnFilter(rColor,lista,'Black')
const filterList4 = returnFilter(rPriceRange,lista,'',300,600)
console.log(filterList1)
console.log(filterList2)
console.log(filterList3)
console.log(filterList4)/*

/*nameList = ['Ricardo','Jessica','Wilson','Gabriel','Luzia','Farigiraf','Sebastian','Moria','Canella','Rafael']
const nruter = nameList.map(name => {
    const eman = [...name].reverse().join('')
    if (eman.toLowerCase() == name.toLowerCase()) {
        console.log(name + ' é um palíndromo')
    }
})*/

/*const returnXRandomNumbers = (min,max,X=1) => {
    let randomNumbersList = []
    for (let cont = 0; cont < X; cont++) {
        randomNumbersList.push(Math.floor(Math.random() * ((max + 1) - min) + min))
    }
    console.log(randomNumbersList)
    return randomNumbersList
}
const returnReduceRandomNumbersList = (min,max,X=1) => {
    return returnXRandomNumbers(min,max,X).reduce((some,prev) => some += prev)
} 
console.log(returnReduceRandomNumbersList(1,650,4))
console.log(returnXRandomNumbers(1,20,5).sort((aValue,bValue)=> aValue - bValue))*/

/*let shoppingCart = [
    {
        item:'Potato',total:6
    },
    {
        item:'Juice',total:4
    },
    {
        item:'Rice',total:1
    },
    {
        item:'cracker',total:3
    },
    {
        item:'Fish',total:2
    }
]
const sortShoppingCartTotal = shoppingCart.sort((aTotal,bTotal) => bTotal.total - aTotal.total)
console.log(sortShoppingCartTotal)*/

/*let pessengers = ['Arnaldo','João','Fred','Camile','Deibide','Marcio','Henrique','Luigi','Marta']
const sortPessengersByName = pessengers.sort((aP,bP) => {
    if (aP.toLocaleLowerCase() < bP.toLocaleLowerCase()) return -1
    if (aP.toLocaleLowerCase() > bP.toLocaleLowerCase()) return +1
    return 0
})
console.log(sortPessengersByName)*/