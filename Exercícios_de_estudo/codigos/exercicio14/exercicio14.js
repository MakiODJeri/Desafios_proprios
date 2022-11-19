//function gerarbuild() {
//    atr.map((el,i)=>{
//        el.innerHTML = Math.floor(Math.random() * (4 - 0) + 0)
//    })
//}
//const atr = document.getElementsByTagName('strong')
//atr = [...atr]

//const atr = document.getElementsByTagName('strong')
//const vals = Array.prototype.map.call(atr, ({innerHTML})=>innerHTML)
//document.write(vals)

const converternum = (el)=>Number(el)
const multiplicar = (el)=>el*2
const dividir = (el)=>el/2
let num =['1','2','444','88'].map(converternum)
console.log(num)
console.log(num.map(multiplicar))
console.log(num.map(dividir))