const nums_relogio = [...document.querySelectorAll('.num_relogio')]
let lista_horario = []
const adci_horario=(horario)=>{
    horario = horario.split('')
    horario.map((num)=>{
        lista_horario.push(num)
    })
}
const mostrar_horario=()=>{
    let cont = 0
    lista_horario.map((num)=>{
        nums_relogio[cont].innerHTML = num
        cont++
    })
}
const adci_zero=(val)=>{
    return val<10?'0'+val:val.toString()
}
const receber_horario=()=>{
    lista_horario = []
    let hora =new Date().getHours()
    hora = adci_zero(hora)
    adci_horario(hora)
    let minutos =new Date().getMinutes()
    minutos = adci_zero(minutos)
    adci_horario(minutos)
    let segundos =new Date().getSeconds()
    segundos = adci_zero(segundos)
    adci_horario(segundos)
    mostrar_horario()
}
const intervalo=setInterval(receber_horario,1000)