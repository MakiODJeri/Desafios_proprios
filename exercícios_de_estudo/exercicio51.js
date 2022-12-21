const mostrar=(lista)=>{
    lista.map((item)=>{
        console.log(item)
    })
}
const gerar_vinteum=()=>{
    let c = 1
    while (num != 20) {
        num = Math.round(Math.random() * (20 - 1) + 1) 
        console.log(num,c)
        c++
    }
}
let num = Math.round(Math.random() * (21 - 1) + 1) 
let num2 = Math.PI
let num3 = Math.sqrt(16)
let num4 = Math.pow(2,4)


mostrar([num,num2,num3,num4])
gerar_vinteum()
