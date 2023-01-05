/*const getErrorMessage = errorType => ({
    'tipo-1': 'Deu ruim.',
    'tipo-2': 'Vish.',
    'tipo-3': 'Eita'
})[errorType] || 'Nooooo...'
const error = 'tipo-4'
try {
    if (true) {
        throw (getErrorMessage(error))
    }
} catch (err) {
    console.log(err)
}*/
/*const nameInput = 'Mike'
const passwordInput = 'Password'
const nameUser = 'Mike'
const passwordUser = 'Password'

const errorMessages = errorType => ({
    'Error1': 'Nome incorreto.',
    'Error2': 'Senha incorreta.',
})[errorType] || 'Erro incerto.'

const logUser = new Promise ((resolve, reject) => {
    if (nameInput === nameUser) {
        if (passwordInput === passwordUser) {
            resolve(`Usuário e senha corretos.`)
        } else {
            reject(errorMessages('Error2'))
        }
    } else {
        reject(errorMessages('Error1'))
    }
})

logUser
    .then(res => console.log(res))
    .catch(err => console.log(err))*/
/*const login = {
    logInto() {
        if (this.log) {
            this.log = false
        } else {
            this.log = true
        }
    }
}
const CadasterUser = ({name,password}) => {
    const user = Object.create(login)
    user.name = name
    user.password = password
    user.log = false
    return user
}*/

/*const user1 = CadasterUser({name: 'Tarik', password: '12G4tBag5H'})
user1.logInto()
const user2 = CadasterUser({name: 'Fernando', password: '12G4tBag5H'})
user2.logInto()
const user3 = CadasterUser({name: 'João', password: '12G4tBag5H'})
user3.logInto()
const p1 = new Promise((resolve,reject) => {
    if (user1.log) {
        resolve(`All are logged`)
    }
    reject(`${user1.name} unlogged`)
})

const p2 = new Promise((resolve,reject) => {
    if (user2.log) {
        resolve(`All are logged`)
    } 
    reject(`${user2.name} unlogged`)
})

const p3 = new Promise((resolve,reject) => {
    if (user3.log) {
        resolve(`All are logged`)
    }
    reject(`${user3.name} unlogged`)
})

const resolveAll = Promise.all([p1,p2,p3])
    .then(res => console.log(res[0]))
    .catch(err => console.log(err))*/

/*const randomTimeout = () => Math.floor(Math.random() * (11 - 1) + 1) * 1000

const user4 = CadasterUser({name: 'Gustavo', password:'v5peHJg96yf'})
const user5 = CadasterUser({name: 'Murilo', password:'v5peHJg96yf'})
const user6 = CadasterUser({name: 'Luciano', password:'v5peHJg96yf'})

const p4 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        user4.logInto()
        resolve(`${user4.name} is first to logged.`)
    },randomTimeout())
})
const p5 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        user5.logInto()
        resolve(`${user5.name} is first to logged.`)
    },randomTimeout())
})
const p6 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        user6.logInto()
        resolve(`${user6.name} is first to logged.`)
    },randomTimeout())
})

const resolveAllRace = Promise.race([p4,p5,p6]) 
    .then(res => console.log(res))*/
/*const getAtributes = {
    getName() {
        return this.name
    }
}
const newGithubUser = ({name}) => {
    const user = Object.create(getAtributes)
    user.name = name
    return user
}
const user1 = newGithubUser({name:'MakiODJeri'})

const githubApiRequest = ({name}) => 
    fetch('https://api.github.com/users/' + name, {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.v3+json',
            },
    }) 
    .then(res => {
        console.log(res)
        return res.json()
    })
    .catch(err => console.log(err))
console.log(githubApiRequest(user1))*/
const convertToHex = colorName => ({
    'red': '#A31419',
    'green': '#10A337',
    'blue': '#4C91F0',
    'yellow': '#F0EA6F',
})[colorName.toLowerCase()] || `Erro: "${colorName}" não encontrada no objeto."`

const convertToHex = color

const inputColors = ['red','brown','black','blue','purple','yellow']
//const inputColors = 'red'

const res = typeof inputColors == 'object' ? inputColors.forEach(color => console.log(convertToHex(color))): console.log(convertToHex(inputColors))