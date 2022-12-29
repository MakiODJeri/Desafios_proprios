const person1 = {
    name: 'Mike',
    age: 21,
    addresses: [
        {addresses: 'Rua Legal, 334', city: 'Cidade Bacana'}
    ],
    setName: function (newName) {
        this.name = newName
    },
    setAge: function (newAge) {
        this.age = newAge
    },
    setAddresses: function (newAddresses) {
        this.addresses = newAddresses
    }
}
const person2 = { 
    ...person1,
    name: 'Tarik',
    age: 19
}
console.log(person1)
console.log(person2)