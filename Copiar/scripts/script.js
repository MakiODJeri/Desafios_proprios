const borda=(el)=>{
    const i = el.target
    i.style.border = '2px solid red'
}
const sai=(el)=>{
    const i = el.target
    i.style.border = '2px solid black'
} 
const borda_botao=(el)=>{
    botao.style.border = '2px dashed red'
}
const sai_botao=(el)=>{
    botao.style.border = '2px dashed black'
}
const marcar=(el)=>{
    const i = el.target
    i.classList.add('marca')
    guarda.push(i.innerHTML)
}
const check=(el)=>{
    const istr = el.target.innerHTML
    let res
    for (let c of guarda) {
        if (istr == c) {
            res = true
            break
        }
    }
    return res
}
const remover=(el)=>{
    const i = el.target
    const istr = el.target.innerHTML
    i.classList.remove('marca')
    for (let c in guarda) {
        if (istr == guarda[c]) {
            guarda.splice(c,1)
        }
    }
    
}
const box = [...document.querySelectorAll('.mons')]
const team = [...document.querySelectorAll('.monsteam')]
const botao = document.querySelector('#botao_copiar')
let guarda = []
let c = 0
box.map((el)=>{
    el.addEventListener('mouseenter',(el)=>{
        borda(el)
    })
    el.addEventListener('mouseleave',(el)=>{
        sai(el)
    })
    el.addEventListener('click',(el)=>{
        ch = check(el)
        if (ch) {
            remover(el)
        } else if (guarda.length > 2){
            window.alert('Você já marcou o máximo de "mons" para o seu time')
        } else {
            marcar(el)
            console.log(guarda)
        }
    })
})
botao.addEventListener('mouseenter',()=>{
    borda_botao()
})
botao.addEventListener('mouseleave',()=>{
    sai_botao()
})
botao.addEventListener('click',()=>{
    team.map((el)=>{
        el.innerHTML = guarda[c]
        remover(el)
        c++

    })
})