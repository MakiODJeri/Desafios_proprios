const randomNumbersGenerator = (min,max,quanti=1,filter) => {
    let c = 0
    let numberList = []
    while (c < quanti) {
        let number = Math.floor(Math.random() * ((max + 1) - min) + min)
        if (filter == 'par') {
            if (number % 2 == 0) {
                numberList.push(number)
                c++
            }
        } else if (filter == 'impar') {
            if (number % 2 != 0) {
                numberList.push(number)
                c++
            }
        } else {
            numberList.push(number)
            c++
        }
    }
    if (quanti > 1) {
        return numberList
    }
    return numberList[0]
}

/*const numerosPares = randomNumbersGenerator(1,20,5,'par')
const numerosImpares = randomNumbersGenerator(1,20,5,'impar')
console.log(numerosPares)
console.log(numerosImpares)
const numeros = [numerosPares,numerosImpares]
console.log(numeros)
const spreadNumeros = [...numerosPares,...numerosImpares]
console.log(spreadNumeros)
const sortNumeros = [...numerosPares,...numerosImpares].sort((numa,numb)=>{
    return numa - numb
})
console.log(sortNumeros)*/

/*const [num1,num2,...rest] = [randomNumbersGenerator(1,10),randomNumbersGenerator(1,10),randomNumbersGenerator(1,10),randomNumbersGenerator(1,10),randomNumbersGenerator(1,10)]
console.log(num1,num2,rest)*/

/*let varName = 'Juliano'
const [name1 = 'Maike'] = [varName]
console.log(name1)*/

const personAdressBase = {
    country: 'Brasil',
    state: 'Minas Gerais',
    city: 'Anteninha do Piruacu'
}
const personAdress1 = {...personAdressBase,street:'Bacana',district:'Legal',number:999}

const showAdress = ({country,state,city,street,district,number}) => console.log(`===============================
País: ${country}
Estado: ${state}
Cidade: ${city}
Rua: ${street}
Bairro: ${district}
Numero: ${number}
`)
showAdress(personAdress1)