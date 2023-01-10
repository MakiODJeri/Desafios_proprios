/*const values = [
    0,
    {},
    '',
    [],
    NaN,
    () => {}
]*/
//const truthyValues = values.filter(value => {
//    if (value) return value
//})

//const truthyValues = values.filter(
//    Boolean(value)
//)
/*const BoolTrue = value => Boolean(value)
const BoolFalse = value => !Boolean(value)
const truthyValues = values.filter(BoolTrue)*/

/*const inputBirthdayYear = '2007'

const getAge = birthdayYear => {
    try {
        if (!Number(birthdayYear)) throw 'Invalide type value for birthday year'
        if (birthdayYear > new Date().getFullYear()) throw 'Invalide birthday year'
        return new Date().getFullYear() - Number(birthdayYear)
    } catch (error) {
        console.log('Error:\n' + error + ', try again.')
    }
}
const age = getAge(inputBirthdayYear)*/

/*const createCharacter = ({firstName,lastName,nickName,series}) => ({
    firstName,
    lastName,
    nickName,
    series,
    getFullName: function() {
        return `${firstName} ${lastName} or ${nickName}`
    },
    getBio: function() {
        const fullName = this.getFullName()
        return `${fullName} is a character from ${series} series.`
    }
})
const arthur = createCharacter({firstName: 'Arthur', lastName: 'Cervero', nickName: 'Campeão', series: 'Ordem Paranormal'})
console.log(arthur.getBio())*/

/*const form = document.querySelector('#form')
form.addEventListener('click', evt => {
    evt.preventDefault()
    if (evt.target != form.submitBtn) {
        return
    }
    try {
        let input = form.textInput.value
        if (input.length < 1) throw 'Write anything in the input box aside the submit button.'
        console.log(pLanguage(input))
    } catch (err) {
        alert(`Error:\n ${err}`) 
    }
})
const pLanguage = name => joinPSyllables(addP(splitSyllables(name)))
const splitSyllables = name => name.split(' ')
const addP = array => splitSyllables(array.reduce((acc,syllable) => `${acc}P${syllable}`,''))
const joinPSyllables = array => array.join(' ')*/

//const body = document.querySelector('body')
/*const createHtmlElement = (element,attributes=[]) => {
    const htmlElement = document.createElement(element)
    if (attributes.length > 0) {
        attributes.forEach(attribute => {
            const {name,value} = attribute
            htmlElement.setAttribute(name, value)
        })
    }
    return htmlElement
}
const createAtribute = ({name,value}) => ({
    name,
    value
})
const attributes = []
attributes.push(createAtribute({name:'style',value:`
    width: 32px;
    height: 32px;
    background-color: red;
    border: 2px solid black;
    border-radius: 50%;
`}))
attributes.push(createAtribute({name: 'id', value: 'pokeball'}))
const pokeball = createHtmlElement('div',attributes)
body.appendChild(pokeball)*/
/*const createHtmlElement = (element,attributes=[]) => {
    const htmlElement = document.createElement(element)
    const elementAttributes = Object.entries(attributes)
    elementAttributes.forEach(([name,value]) =>
        htmlElement.setAttribute(name,value))
    return htmlElement
}
const attributes = {
    style: `
    width: 32px;
    height: 32px;
    background-color: red;
    border: 2px solid black;
    border-radius: 50%;
`,
    id: 'pokeball'
}
const pokeball = createHtmlElement('div',attributes)
body.appendChild(pokeball)*/

/*const external = () => {
    const name = 'Arthur Cervero'
    const internal = () => {
        console.log(Boolean(name.length))
    }
    internal()
}
external()*/

/*const secretFunc = secret => () => secret
const secret1 = 'Nice secret'
const secret2 = 'Bad secret'
const secret3 = 'Good to see secret'
const saveSecret1 = secretFunc(secret1)
const saveSecret2 = secretFunc(secret2)
const saveSecret3 = secretFunc(secret3)
console.log(saveSecret1())
console.log(saveSecret2())
console.log(saveSecret3())*/

/*const getAgeIn = actualAge => year => actualAge + (year - new Date().getFullYear())
const actualAge = new Date().getFullYear() - 2006
const birthIn2006 = getAgeIn(actualAge)
console.log(birthIn2006(2027))*/