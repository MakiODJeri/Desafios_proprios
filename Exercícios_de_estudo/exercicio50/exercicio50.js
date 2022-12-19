const p_data = document.querySelector('#data')
const p_alarme = document.querySelector('#alarme')
const input_tempo = document.querySelector('#input_tempo')
const btn_ativar = document.querySelector('#ativar')
const btn_parar = document.querySelector('#parar')
let tempo = 0
const som_legal =new Audio('Pigstep.mp3')
let alarme_ativo = false
let som_tocando = false

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
    if (alarme_ativo && tempo > 0) {
        tempo--
        mostrar_alarme(tempo/3600<1?0:Math.trunc(tempo/3600),tempo/60<1?0:Math.trunc(tempo/60),tempo%60)
    } else if (alarme_ativo == true){
        window.alert(`A contagem do alarme chegou ao seu fim as ${new Date().getHours()} horas e ${new Date().getMinutes()} minutos.`)
        clearInterval(intervalo)
        som_legal.play()
        alarme_ativo = false
    }
}

mostrar_data(new Date().getDate(),new Date().getMonth(),new Date().getFullYear())

btn_ativar.addEventListener('click', ()=>{
    if (input_tempo.value.length > 0 && tempo == 0 && alarme_ativo == false) {
        tempo = input_tempo.value
        if (tempo < 0) {
            tempo *= -1
        }
        alarme_ativo = true
        mostrar_alarme(tempo/3600<1?0:Math.trunc(tempo/3600),tempo/60<1?0:Math.trunc(tempo/60),tempo%60)
        intervalo = setInterval(contagem,1000)
    } else if (alarme_ativo == false && tempo > 0) {
        alarme_ativo = true
        intervalo = setInterval(contagem,1000)
    }
})
btn_parar.addEventListener('click', ()=>{
    if (alarme_ativo == false) {
        tempo = 0
        mostrar_alarme(tempo,tempo,tempo)
        som_legal.pause()
        som_legal.currentTime = 0
    } else {
        alarme_ativo = false
        clearInterval(intervalo)
    }
})

let intervalo = setInterval(contagem,1000)
clearInterval(intervalo)