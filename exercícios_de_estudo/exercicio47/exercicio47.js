const span_msg = document.querySelector('#span_msg')
const btn_promise = document.querySelector('#btn_promise')
const body = document.querySelector('body')
const setar_msg=(msg,id='')=>{
    span_msg.innerHTML = msg
    body.id = id
}
const saber_horario=()=>{
    let promise =new Promise((resolve,reject)=>{
        let hour = 0
        let interval = 3000
        setTimeout(()=>{
            hour =new Date().getHours()
            if (hour > 5 && hour < 13) {
                resolve([`São exatamente ${hour} horas Bom dia`,'bom_dia'])
            } else if (hour > 12 && hour < 18) {
                resolve([`São exatamente ${hour} horas Boa tarde`,'boa_tarde','boa_tarde'])
            } else {
                resolve([`São exatamente ${hour} horas Boa noite`,'boa_noite','boa_noite'])
            }
        },interval)
    })
    return promise
} 

btn_promise.addEventListener('click', ()=>{
    setar_msg('Processando...')
    btn_promise.style.display = 'none'
    saber_horario()
    .then((retun)=>{
        setar_msg(retun[0],retun[1])
    })
})