 const bau = document.querySelector('#bau')
 const cores = ['cyan','purple','magenta','green','blue']
 const adci = document.querySelector('#adci')
 const rmvr = document.querySelector('#rmvr')
 let iden = 'a'
adci.addEventListener('click',()=>{
    let tamh = bau.children.length
    if (tamh < 9) {
        let sqr = document.createElement('div')  
        let randc = Math.floor(Math.random() * (5 - 0) + 0)
        sqr.style.width = '100px'
        sqr.style.height = '100px'
        sqr.style.border = '2px solid black'
        sqr.style.background = cores[randc]
        sqr.id = iden
        console.log(iden)
        iden += 'a'
        bau.appendChild(sqr)
    } else {
        window.alert('Máximo de item adicionados a caixa')
    }
})
rmvr.addEventListener('click',()=>{
    let tamh = bau.children.length
    if (tamh > 0) {
    }
})