const formulario_hardware = document.querySelector('#formulario')
let lista_hardware = []


class Hardware {
    constructor (cpu,gpu) {
        this.cpu = cpu
        this.gpu = gpu
    }
}
const validar= function (evento) {
    try {
        const form = this
        if (form.cpu.value == '') throw 'Preencha a sua cpu'
        if (form.gpu.value == '') throw 'Preencha a sua gpu'
        if (form.ram.value == 'memoria_ram') throw ('Escolha alguma opção de memoria ram')
        alert('Configuração de hardware enviado com sucesso')
    } catch (error) {
        alert(error)
    }
}

formulario_hardware.addEventListener('submit', validar)