let idades = []
const filtrar = document.querySelector('#filtrar')
const novos = document.querySelector('#novos')
const pessoas = [...document.querySelectorAll('.idpess')]
const nicho = [...document.querySelectorAll('.nicho')]
const adci=()=>{
    idades = []
    pessoas.map((el)=>{
        el.innerHTML = ''
    })
    nicho.map((el)=>{
        el.innerHTML = ''
    })
    for (let c = 0; c < 9; c++) {
        idades.push(Math.floor(Math.random() * (100 - 1) + 1))
    }
    console.log(idades)
    let c = 0
    pessoas.map((el)=>{
        el.innerHTML = idades[c]
        c++
    })
}
filtrar.addEventListener('click',()=>{
    const maior=idades.filter((val)=>{
        if (val >= 50){
            return val
        }
    })
    for (let c = 0; c < maior.length; c++) {
        nicho[c].innerHTML = maior[c]
    }
})
novos.addEventListener('click',()=>{
    adci()
})