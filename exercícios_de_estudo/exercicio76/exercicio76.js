/*const mouse1 = '{"brand": "Razer","weight":61,"grip":["Fingertip","Claw"],"rgb":true}';
console.log(mouse1)
const mouse1JSON = JSON.parse(mouse1)
console.log(mouse1JSON)
const mouse1Stringify = JSON.stringify(mouse1JSON)
console.log(mouse1Stringify)*/
/*const caixa = {
    dentro: {
        maisDentro:'Guardado'
    }
}
const oi = ({dentro: {maisDentro}}) => console.log(maisDentro)
oi(caixa)*/
const arrayItems1 = [
    'Chestplate',
    [
        'Shovel',
        'Sword',
        'Pickaxe'
    ],
    'Elytra'
]
const show = ([, [item1,item2,item3]]) => {
    console.log(item1)
    console.log(item2)
    console.log(item3)
}
show(arrayItems1)