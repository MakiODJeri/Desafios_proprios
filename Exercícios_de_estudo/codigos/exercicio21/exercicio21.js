const adci = document.querySelector('#adci')
const rmvr = document.querySelector('#rmvr')
const selc = document.querySelector('#selc')
const cxtx = document.querySelector('#nome')
const list = document.querySelector('#lista')
let txtid = 'curs'
let numid = 0
const crtcursid=()=>{
    numid++
    return txtid + numid.toString()
}
const adclist=(nome)=>{
    const curs = [...document.querySelectorAll('.cursos')]
    let conti = true
    curs.map((el)=>{
        if (el.innerText == nome) {
            window.alert('O nome do curso que você digitou já existe na lista, tente outro nome.')
            conti = false
        }
    })
    if (conti) {
        const item = document.createElement('div')
        const labl = document.createElement('label')
        const radi = document.createElement('input')
        radi.type = 'radio'
        radi.id = crtcursid()
        radi.name = 'curs'
        labl.htmlFor = radi.id
        labl.innerText = nome
        labl.style.padding = '30px'
        radi.style.marginRight = '30px'
        item.appendChild(labl)
        item.appendChild(radi)
        item.setAttribute('class','cursos')
        console.log(item)
        list.appendChild(item)  
    }
}
adci.addEventListener('click',()=>{
    const nome = cxtx.value
    cxtx.value = ''
    cxtx.focus()
    const curs = [...document.querySelectorAll('.cursos')]
    if (nome.length == 0) {
        window.alert('Digite algum nome para ser adicionado.')
    } else if (curs.length > 5) {
        window.alert('impossível adicionar novos cursos, número máximo já adicionado.')
    } else {
        adclist(nome)
    }
}) //adicionar um novo curso a lista
const rmvlist=(nome)=>{
    const curs = [...document.querySelectorAll('.cursos')]  
    curs.filter((el)=>{
        if (el.innerText == nome) {
            list.removeChild(el)
        }
    })
}
rmvr.addEventListener('click',()=>{
    const curs = [...document.querySelectorAll('.cursos')]
    const radioc = document.querySelector('input[name="curs"]:checked')
    if (curs.length > 0 && radioc) {
        const cur = document.querySelector('input[name="curs"]:checked').parentNode.innerText
        rmvlist(cur)
    } else if (curs.length == 0) {
        window.alert('Você precisa adicionar algum curso a lista para remover.')
    } else {
        window.alert('Marque algum dos cursos da lista a direita para remover.')
    }
})//remover um dos cursos que estão na lista