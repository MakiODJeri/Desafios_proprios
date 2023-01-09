const users = [
    {name: 'Bob', email: '@email.com'},
    {name: 'Alice', email: '@email.com'},
    {name: 'Bruce', email: '@email.com'},
    {name: 'John', email: '@email.com'},
    {name: 'Ellie', email: '@email.com'},
    {name: 'Fiona', email: '@email.com'},
    {name: 'Larry', email: '@email.com'},
    {name: 'Iono', email: '@email.com'},
    {name: 'Surge', email: '@email.com'},
    {name: 'Toro', email: '@email.com'}
]

const usersList = users
usersList.forEach(user => {
    user.password = Math.floor(Math.random() * (1000000000000000000000 - 10000000) + 10000000).toString().slice(0,8)
})