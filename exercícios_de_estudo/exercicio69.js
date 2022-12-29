//Adicionar idades Objs kids de uma lista
const kidsList = [
    {
        name:'Lucas'
    },
    {
        name:'Alfredo'
    },
    {
        name:'Rosa'
    },
    {
        name:'Sebastian'
    },
    {
        name:'Lilian'
    }
]
const addAgesForKids = kidsList.map((child)=>{
    console.log(child)
    if (child.age == undefined) {
        child.age = Math.round(Math.random() * (10 - 1)) 
    }
})
addAgesForKids
console.log(kidsList)
//Retornar uma lista contendo apenas os domínios dos 
const emailList = [
    {
        email: 'LucasTrinstan3019@hotmail.com'
    },
    {
        email: 'LilianGonsales4468@gmail.com'
    },
    {
        email: '4nG3L0FtH3N1GhT@yahoo.com'
    },
    {
        email: 'D3M0N0FtH3D4Y@terra.com'
    }
]
const returnEmailsDomain = emailList.map(email => email.email.split('@')[1])
const domainList = returnEmailsDomain
console.log(domainList)
//Encontrar o maior preço entre os produtos abaixo de 100 reais
const shoppingCart = [
    {
        item: 'Yurgut', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Cake', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Melon', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Juice', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Soda', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Bean', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Carrot', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Potato', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Cracker', price: Math.round(Math.random() * (200 - 1))
    },
    {
        item: 'Rice', price: Math.round(Math.random() * (200 - 1))
    }
]
const returnLessThanHundred = shoppingCart.filter((item) => {
    if (item.price <= 100) {
        return item
    }
})
const biggestPrice = returnLessThanHundred.sort((aprice,bprice) => {
    return bprice.price - aprice.price
})[0]  
const lowestPrice = returnLessThanHundred.sort((aprice,bprice) => {
    return aprice.price - bprice.price
})[0]
console.log(shoppingCart)
console.log(biggestPrice)
console.log(lowestPrice)