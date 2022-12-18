const p_data = document.querySelector('#data')
const p_alarme = document.querySelector('#alarme')
const input_tempo = document.querySelector('#input_tempo')
const btn_ativar = document.querySelector('#ativar')
const btn_parar = document.querySelector('#parar')
let tempo = 0

const mostrar_data=(dia,mes,ano)=>{
    dia = adicionar_zero(dia)
    mes = adicionar_zero(mes)
    ano = adicionar_zero(ano)
    p_data.innerHTML = `${dia}/${mes}/${ano}`
}
const adicionar_zero=(val)=>{
    return val<10?'0'+val:val.toString()
}
const mostrar_alarme=(hora,minuto,segundo)=>{
    while (minuto >= 60) {
        minuto -= 60
    }
    hora = adicionar_zero(hora)
    minuto = adicionar_zero(minuto)
    segundo = adicionar_zero(segundo)
    p_alarme.innerHTML = `${hora} : ${minuto} : ${segundo}`
}
const contagem=()=>{
    if (tempo > 0) {
        tempo--
        mostrar_alarme(tempo/3600<1?0:Math.trunc(tempo/3600),tempo/60<1?0:Math.trunc(tempo/60),tempo%60)
    } else {
        window.alert('A contagem do alarme chegou ao seu fim.')
    }
}
mostrar_data(new Date().getDate(),new Date().getMonth(),new Date().getFullYear())

btn_ativar.addEventListener('click', ()=>{
    if (input_tempo.value.length > 0 && tempo == 0) {
        tempo = input_tempo.value
        if (tempo < 0) {
            tempo *= -1
        }
        mostrar_alarme(tempo/3600<1?0:Math.trunc(tempo/3600),tempo/60<1?0:Math.trunc(tempo/60),tempo%60)
        const intervalo =setInterval()
    }
})