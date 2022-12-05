const valores = ['Dante','Dara','Lirio','Chico','Kaiser','Tenebris','Magistrada','Xande','Guizo','Kian','Estrangeiro','Morato','Arthur','Espreitador']
const tela = document.querySelector('#mostrar')
const vals = [...document.querySelectorAll('.vals')]
let selec = []
vals.map((el)=>{
    const rnum = Math.floor(Math.random() * (valores.length - 0) + 0)
    el.innerHTML = valores[rnum]
    el.addEventListener('click', ()=>{
        let c = 0
        let conti = true
        selec.map((el2)=>{
            if (el == el2) {
                conti = false
                selec.splice(c,1)
                el.classList.toggle('marca')
                tela.innerHTML = ''
                selec.map((el2)=>{
                    tela.innerHTML += el2.innerHTML + '...'
                })
            }
            c++
        })
        c = 0
        if (conti) {
            selec.push(el)
            el.classList.toggle('marca')
            tela.innerHTML = ''
            selec.map((el2)=>{
                tela.innerHTML += el2.innerHTML + '...'
            })
            console.log(selec)
        }
    })
})