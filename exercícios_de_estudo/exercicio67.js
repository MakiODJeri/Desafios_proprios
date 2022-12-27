/*const giveAccess = person => console.log(`Acesso garantido ao ${person.level} ${person.name}`)
function Authenticate(verify) {
    let array = []
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return true
}
function login(person,fn) {
    if (person.level === 'Admin') {
        fn(5000000)
    } else if (person.level === 'User') {
        fn(1000000)
    }
    giveAccess(person)
}
login({level:'Admin',name:'Tarik'},Authenticate)
login({level:'User',name:'Mike'},Authenticate)*/