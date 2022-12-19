const olhos = [...document.querySelectorAll('.olhos')]
let posx_mice = 0
let posy_mice = 0
window.addEventListener('mousemove', (evt)=>{
    posx_mice = evt.clientX
    posy_mice = evt.clientY
    let rot = Math.atan2(posy_mice,posx_mice)
    rot *= 180/Math.PI
    olhos.forEach((o)=>{
        o.style.transform = 'rotate('+rot+'deg)'
    })
})