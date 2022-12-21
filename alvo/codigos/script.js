const p_tempo = document.querySelector('#tempo')
const btn_limpar = document.querySelector('#limpar')
const p_pontuacao = document.querySelector('#pontuacao')
const div_tela = document.querySelector('#tela')

let largura_tela = div_tela.offsetWidth
let altura_tela = div_tela.offsetHeight

let tempo = 60

const mostrar_tempo=()=>{
    let minutos = Math.floor(tempo/60)<10?`0${Math.floor(tempo/60)}`:Math.floor(tempo/60)
    let segundos = Math.trunc(tempo%60)<10?`0${Math.trunc(tempo%60)}`:Math.trunc(tempo%60)
    p_tempo.innerHTML = `${minutos}:${segundos}`
    tempo--
}