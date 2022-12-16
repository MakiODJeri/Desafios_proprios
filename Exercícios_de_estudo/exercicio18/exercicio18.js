const caixares = document.querySelector('div#coresc')
const caixascores = [...document.querySelectorAll('div.cores')]
const coruni = caixascores[2]
console.log(coruni)
let cor = ''
caixascores.map((el=>{
    el.addEventListener('click',(el)=>{
        cor = el.target
        caixares.innerHTML = cor.innerHTML
        caixares.style.background = cor.innerHTML
    })
}))
coruni.addEventListener('click',(el)=>{
    el.stopPropagation()
})