 const bau = document.querySelector('#bau')
 const cores = ['cyan','purple','magenta','green','blue']
 const adci = document.querySelector('#adci')
 const rmvr = document.querySelector('#rmvr')
adci.addEventListener('click',()=>{
    let tamh = bau.children.length
    if (tamh < 9) {
        let sqr = document.createElement('div')  
        let randc = Math.floor(Math.random() * (5 - 0) + 0)
        sqr.style.background = cores[randc]
        sqr.setAttribute('class','square')
        bau.appendChild(sqr)
    } else {
        window.alert('Máximo de item adicionados a caixa')
    }
})
rmvr.addEventListener('click',()=>{
    let tamh = bau.children.length
    if (tamh > 0) {
        bau.removeChild(bau.lastChild)
        
    } else {
        window.alert('Mínimo de items dentro da caixa')
    }
})