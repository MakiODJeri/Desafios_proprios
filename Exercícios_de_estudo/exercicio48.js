lista_horarios = []
const por_lista=([...lista])=>{
    lista.map((item)=>{
        console.log(item,typeof item)
        lista_horarios.push(item)
    })
}
const adci_zero=(val)=>{
    return val<10?'0'+val:val
}
const data =new Date() 
const data_now =new Date().getTime()
const data_str =new Date().toDateString()
const ano =new Date().getFullYear()
let mes =new Date().getMonth()
mes = adci_zero(mes)
let dia =new Date().getDate()
dia = adci_zero(dia)
let hora =new Date().getHours()
hora = adci_zero(hora)
let minutos =new Date().getMinutes()
minutos = adci_zero(minutos)
let segundos =new Date().getSeconds()
segundos = adci_zero(segundos)
const data_resun = dia+'/'+mes+'/'+ano


por_lista([data,data_now,data_resun,data_str,ano,mes,dia,hora,minutos,segundos])