const span_msg = document.querySelector('#span_msg')
const body = document.querySelector('body')

let promise =new Promise((res_ok,)=>{

})

let hour = 0
let interval = 3000
const setar_msg=(msg,id='')=>{
    span_msg.innerHTML = msg
    body.id = id
}

setTimeout(()=>{
    hour =new Date().getHours()
},interval)

if (hour > 5 && hour < 13) {
    setar_msg(`São exatamente ${hour} horas Bom dia`,'bom_dia')
} else if (hour > 12 && hour < 18) {
    setar_msg(`São exatamente ${hour} horas Boa tarde`,'boa_tarde')
} else {
    setar_msg(`São exatamente ${hour} horas Boa noite`,'boa_noite')
}

setar_msg('Processando...')