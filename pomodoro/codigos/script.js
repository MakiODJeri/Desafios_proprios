const p_horario = document.querySelector('#horario')
const p_data = document.querySelector('#data')
const btn_timerPomodoro = document.querySelector('#timer_pomodoro')
const btn_timerPausaC = document.querySelector('#timer_pausaCurta') 
const btn_timerPausaL = document.querySelector('#timer_pausaLonga') 
const p_contador = document.querySelector('#contador')
const btn_iniciar = document.querySelector('#btn_iniciar')
const input_valorPo = document.querySelector('#valor_pomodoro')
const input_valorPc = document.querySelector('#valor_pausaCurta')
const input_valorPl = document.querySelector('#valor_pausaLonga')
const btn_atualizar = document.querySelector('#atualizar_timers')
const btn_ativarAuto = document.querySelector('#btn_ativarAuto')

const dia_da_semana=(val)=>{
    let dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
    return dias[val]
}
const atualizar_horaEdata=()=>{
    let horario =new Date().getHours()<10?'0' + new Date().getHours(): new Date().getHours()
    horario += ':'
    horario += new Date().getMinutes()<10?'0' + new Date().getMinutes(): new Date().getMinutes()
    p_horario.innerHTML = horario
    let data = new Date().getDay()
    data = dia_da_semana(data)
    data += ' '
    data += new Date().getMonth()<10?'0' + new Date().getMonth()+1: new Date().getMonth()+1
    data += '/'
    data += new Date().getDate()<10?'0' + new Date().getDate(): new Date().getDate()
    p_data.innerHTML = data
}
const atualizar_timer=(val)=>{
    let val_timer = Math.floor(val/60)<10?'0'+ Math.floor(val/60):Math.floor(val/60)
    val_timer += ':'
    val_timer += Math.trunc(val%60)<10?'0'+ Math.trunc(val%60):Math.trunc(val%60)
    return val_timer
}

const contagem_timer=()=>{
    if (tempo.ligado == true) {
        tempo.diminuirValAtivado()
        p_contador.innerHTML = atualizar_timer(tempo.val_ativado)
    }
    if (tempo.val_ativado == 0) {
        btn_iniciar.innerHTML = 'Iniciar'
        clearInterval(contagem)
        tempo.ligar(false)
        p_contador.innerHTML = mostrar_val_timer()
    }
}

const mostrar_val_timer=()=>{
    if (tempo.resets%8 == 0 && tempo.resets > 0) {
        return atualizar_timer(tempo.pausaLonga)
    } else if (tempo.resets%2 == 0 && tempo.resets > 0) {
        return atualizar_timer(tempo.pausaCurta)
    } else {
        return atualizar_timer(tempo.pomodoro)
    }
}

const tocar_timer=(on)=>{
    if (tempo.ligado == false) {
        tempo.novoReset(1)
        if (tempo.resets%8 == 0) {
            if (tempo.val_ativado == 0) {
                tempo.setValAtivado(tempo.pausaLonga)
            }
            tempo.ligar(true)
            contagem = setInterval(contagem_timer,1000)
        } else if (tempo.resets%2 == 0) {
            if (tempo.val_ativado == 0) {
                tempo.setValAtivado(tempo.pausaCurta)
            }
            tempo.ligar(true)
            contagem = setInterval(contagem_timer,1000)
        } else {
            if (tempo.val_ativado == 0) {
                tempo.setValAtivado(tempo.pomodoro)
            }
            tempo.ligar(true)
            contagem = setInterval(contagem_timer,1000)
        }
    }
}
class Timer {
    constructor(pomodoro,pausaCurta,pausaLonga) {
        this.pomodoro = pomodoro*60
        this.pausaCurta = pausaCurta*60
        this.pausaLonga = pausaLonga*60
        this.resets = 0
        this.pausasAuto = false
        this.ligado = false
        this.val_ativado = 0
    }
    setPomodoro=(pomodoro)=>{
        this.pomodoro = pomodoro*60
    }
    setPausaCurta=(pausaCurta)=>{
        this.pausaCurta = pausaCurta*60
    }
    setPausaLonga=(pausaLonga)=>{
        this.pausaLonga = pausaLonga*60
    }
    novoReset=(val)=>{
        this.resets += val
    }
    ativarPausasAuto=(on)=>{
        this.pausasAuto = on
    }
    ligar=(on)=>{
        this.ligado = on
    }
    setValAtivado=(val)=>{
        this.val_ativado = val
    }
    diminuirValAtivado=()=>{
        this.val_ativado--
    }
}
atualizar_horaEdata()
let atualizar_relogio = setInterval(atualizar_horaEdata,10000)
let tempo =new Timer(25,5,15)
p_contador.innerHTML = mostrar_val_timer()
let contagem = setInterval(tocar_timer,1000)
clearInterval(contagem)




btn_iniciar.addEventListener('click', ()=>{
    if (tempo.ligado == false) {
        btn_iniciar.innerHTML = 'Pausar'
        tocar_timer()
        input_valorPc.value = ''
        input_valorPl.value = ''
        input_valorPo.value = ''
        input_valorPc.disabled = true
        input_valorPl.disabled = true
        input_valorPo.disabled = true
    } else {
        btn_iniciar.innerHTML = 'Iniciar'
        tempo.ligar(false)
        clearInterval(contagem)
        tempo.novoReset(-1)
        input_valorPc.disabled = false
        input_valorPl.disabled = false
        input_valorPo.disabled = false
    }
})
btn_timerPomodoro.addEventListener('click', ()=>{
    btn_iniciar.innerHTML = 'Iniciar'
    tempo.ligar(false)
    clearInterval(contagem)
    tempo.novoReset(-1) 
    tempo.setValAtivado(tempo.pomodoro)
    p_contador.innerHTML = atualizar_timer(tempo.pomodoro)
})
btn_timerPausaC.addEventListener('click', ()=>{
    btn_iniciar.innerHTML = 'Iniciar'
    tempo.ligar(false)
    clearInterval(contagem)
    tempo.novoReset(-1) 
    tempo.setValAtivado(tempo.pausaCurta)
    p_contador.innerHTML = atualizar_timer(tempo.pausaCurta)
})
btn_timerPausaL.addEventListener('click', ()=>{
    btn_iniciar.innerHTML = 'Iniciar'
    tempo.ligar(false)
    clearInterval(contagem)
    tempo.novoReset(-1) 
    tempo.setValAtivado(tempo.pausaLonga)
    p_contador.innerHTML = atualizar_timer(tempo.pausaLonga)
})
btn_atualizar.addEventListener('click', ()=>{
    if (tempo.ligado == false) {
        tempo.setPomodoro(input_valorPo.value.length<1?25:Number(input_valorPo.value))
        tempo.setPausaCurta(input_valorPc.value.length<1?5:Number(input_valorPc.value))
        tempo.setPausaLonga(input_valorPl.value.length<1?15:Number(input_valorPl.value))
        tempo.setValAtivado(0)
        p_contador.innerHTML = mostrar_val_timer()
    }
})
btn_ativarAuto.addEventListener('click', ()=>{
    if (tempo.pausasAuto == false) {
        tempo.ativarPausasAuto(true)
        btn_ativarAuto.innerHTML = 'Desativar'
    } else {
        tempo.ativarPausasAuto(false)
        btn_ativarAuto.innerHTML = 'Ativar'
    } 
})