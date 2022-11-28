const mostrar=()=>{
    console.log(quadjog)
    console.log(voce)
    console.log(cpu)
}
const x=(el)=>{
    const i = el.target
    i.classList.add('x')
    let c = 0
    for (c in quadjog) {
        if(quadjog[c].id == i.id) {
            voce.push(i.id)
            quadjog.splice(c,1)
        }
    }
}
const rdm=()=>{
    if (quadjog.length > 0) {
        let rnum = Math.floor(Math.random() * (quadjog.length - 0) + 0)
        cpu.push(quadjog[rnum].id)
        quadjog[rnum].classList.add('o')
        quadjog.splice(rnum,1)
    }
}
const checkq1=(...ar)=>{
    if (ar.indexOf('q1') == -1) {
        return false
    } else {
        return true
    }
}
const checkq2=(...ar)=>{
    if (ar.indexOf('q2') == -1) {
        return false
    } else {
        return true
    }
}
const checkq3=(...ar)=>{
    if (ar.indexOf('q3') == -1) {
        return false
    } else {
        return true
    }
}
const checkq4=(...ar)=>{
    if (ar.indexOf('q4') == -1) {
        return false
    } else {
        return true
    }
}
const checkq5=(...ar)=>{
    if (ar.indexOf('q5') == -1) {
        return false
    } else {
        return true
    }
}
const checkq6=(...ar)=>{
    if (ar.indexOf('q6') == -1) {
        return false
    } else {
        return true
    }
}
const checkq7=(...ar)=>{
    if (ar.indexOf('q7') == -1) {
        return false
    } else {
        return true
    }
}
const checkq8=(...ar)=>{
    console.log(ar)
    if (ar.indexOf('q8') == -1) {
        return false
    } else {
        return true
    }
}
const checkq9=(...ar)=>{
    if (ar.indexOf('q9') == -1) {
        return false
    } else {
        return true
    }
}
const primeiro=(...ar)=>{
    if (checkq1(ar) && checkq2(ar) && checkq3(ar)) {
        return true
    } else {
        return false
    }
}
const quad = [...document.querySelectorAll('.quad')]
const ttlvt = document.querySelector('#ttlvt')
const ttlpt = document.querySelector('#ttlpt')
const botao = document.querySelector('#limpar')
let quadjog = quad
let voce = []
let cpu = []
mostrar()
quadjog.map((el)=>{
    el.addEventListener('click',(el)=>{
        x(el)
        if (primeiro(voce)) {
            console.log('acabou')
        }
        rdm()
        mostrar()
    })
})
botao.addEventListener('click',()=>{
    quadjog = [...document.querySelectorAll('.quad')]
    console.log(quadjog)
    quadjog.map((el)=>{
        el.classList.remove('x')
        el.classList.remove('o')
        voce = []
        cpu = []
    })
    mostrar()
})
// indexof != -1