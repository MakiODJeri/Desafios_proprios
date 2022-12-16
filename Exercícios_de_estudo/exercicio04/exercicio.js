/*let l1 = {nome:'Pikachu',ataque:30,defesa:15,velocidade:40,habilidade:'Static'}
let l2 = {nome:'Volcarona',ataque:40,defesa:10,velocidade:30,item:'Charcoal'}
let l3 = {...l1,...l2}
console.log(l1)
console.log(l2)
console.log(l3)
function delta(a=1,b=1,c=0) {
    return b ** 2 - 4 * a * c
}
let valores = [2,4,3]
console.log(delta(...valores))*/
let objs = [...document.getElementsByTagName('div')]
for (let c in objs) {
    objs[c].innerHTML += ' UAI. SÔ.'
}
for (let c of objs) {
    c.innerHTML += ' UAI. SÔ.'
}