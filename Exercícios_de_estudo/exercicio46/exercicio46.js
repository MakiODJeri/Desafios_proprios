const btn_abrir = document.querySelector('#btn_abrir')
const aba_gaveta = document.querySelector('#aba_gaveta')
let aberto = 'Fechar'

btn_abrir.addEventListener('click', ()=>{
    if (aberto == 'Fechar') {
        btn_abrir.innerHTML = aberto
        aba_gaveta.classList.toggle('inexistir')
        aberto = 'Abrir'
    } else {
        btn_abrir.innerHTML = aberto
        aba_gaveta.classList.toggle('inexistir')
        aberto = 'Fechar'
    }
})