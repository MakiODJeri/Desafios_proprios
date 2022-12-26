const btn_oi = document.querySelector('#btn_oi')
/*const gerarAleatorio = (min=1,max=20) => Math.floor(Math.random() * ((max + 1) - min) + min)*/
btn_oi.addEventListener('click', () => {
    console.log('Arrow function')
    console.log(this)
    console.log('================================')
})
btn_oi.addEventListener('mouseleave', function () {
    console.log('Function')
    console.log(this)
    console.log('================================')
})