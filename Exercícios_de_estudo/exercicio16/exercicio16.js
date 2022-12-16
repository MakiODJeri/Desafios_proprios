//const square1 = document.querySelector('#s1')
const slist = [...document.querySelectorAll('.s')]
//console.log(square1)
console.log(slist)

const destaque=(evt)=> {
    const el=evt.target
    el.classList.add('des')
}
const borda=(evt)=> {
    const el=evt.target
    el.classList.add('bor')
}
const remov=(evt)=> {
    const el=evt.target 
    el.classList.remove('bor')
} 

//square1.addEventListener('dblclick',(evt)=>{
//    destaque(evt)
//    console.log(evt.target)
//})
slist.map((el)=>{
    el.addEventListener('dblclick',(evt)=>{
        destaque(evt)
        console.log(`${evt.target.id} foi destacado.`)
    })
    el.addEventListener('mouseenter',(evt)=>{
        borda(evt)
    })
    el.addEventListener('mouseleave', (evt)=>{
        remov(evt)
    })    
})