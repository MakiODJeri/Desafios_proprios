/*const tester = () => {
    try {
        theCode
    } catch (err) {
        console.error('Erro no código da aplicação:\n' + err)
    } finally {
        console.info('Código finalizado.')
    }
}

tester()*/

/*const getAvatar = githubUser => fetch('https://api.github.com/users/' + githubUser) 
    .then(res => res.status=='200'?res.json():'404')
    .then(res => { return res!='404'?{user: res.login, avatar: res.avatar_url}:res })
    .catch(err => 'Erro ao tentar se conectar com a api do github:\n' + err)

const getGithubUserAvatar = githubUser => {
    try {
        if (githubUser .length < 1) throw 'Digite o nome de algum usuário.'
        const user = getAvatar(githubUser)
    } catch (err) {
        console.log(err)   
    }
}

getGithubUserAvatar('MakiODJeri')*/

/*const select = document.querySelector('#select')
select.addEventListener('click', event => {
    if (event.path[0].classList.value === 'option' && event.target.tagName === 'DIV') {
        console.log(`${event.path[0].innerHTML} removido(a).`)
        select.removeChild(event.path[0])
    }
})*/

/*const list = [
    {name: 'Mike', age: 20},
    {name: 'Tarik', age: 18},
    {name: 'Gustavo', age: 10},
    {name: 'Henrique', age: 48},
    {name: 'Jerry', age: 60},
    {name: 'Malenia', age: 37},
    {name: 'Rafaela', age: 26},
    {name: 'Maria', age: 20},
    {name: 'Helena', age: 14},
    {name: 'Amelie', age: 19}
]

const returnFirstLetterList = (list,firstLetter) => 
 list.reduce((acc,obj) => acc += obj.name[0].toLowerCase() === firstLetter.toLowerCase()?
    `{name: "${obj.name}", age: ${obj.age}}` + '\n'
    :'','')

const orderFirstLetterList = (list,firstLetter) => 
 returnFirstLetterList(list,firstLetter).split('\n')

const returnOlder = list => 
 list.sort((obja,objb) => objb.age - obja.age)

const returnNewest = list => 
 list.sort((obja,objb) => obja.age - objb.age)

console.log(orderFirstLetterList(list,'m'))*/

const createPeople = ({name, age}) => {
    name,
    age
}
const randomNum = (min,max) => 
    Math.floor(Math.random() * ((max + 1) - min) + min)
const minMaxRandomNum = (min,max,quantity) => {
    if (quantity > 1) {
        const nums = []
        for (let i = 0; i < quantity; i++) {
            nums.push(randomNum(min,max))
        }
        return nums
    } else {
        return randomNum(min,max)
    }
}
const peopleAge = []
peopleAge.push({name: 'Heitor', age: minMaxRandomNum(10,40), country: 'BR'})
peopleAge.push({name: 'Rafael', age: minMaxRandomNum(10,40), country: 'EU'})
peopleAge.push({name: 'Gabriela', age: minMaxRandomNum(10,40), country: 'PT'})
peopleAge.push({name: 'Beatrice', age: minMaxRandomNum(10,40), country: 'BR'})
peopleAge.push({name: 'Wilson', age: minMaxRandomNum(10,40), country: 'BR'})
peopleAge.push({name: 'Gabriel', age: minMaxRandomNum(10,40), country: 'JP'})
peopleAge.push({name: 'Michael', age: minMaxRandomNum(10,40), country: 'DEU'})
peopleAge.push({name: 'Elizabeth', age: minMaxRandomNum(10,40), country: 'FR'})
peopleAge.push({name: 'Ronaldo', age: minMaxRandomNum(10,40), country: 'MX'})
peopleAge.push({name: 'Carlos', age: minMaxRandomNum(10,40), country: 'CA'})
