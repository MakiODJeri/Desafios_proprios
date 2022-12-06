const inputnome = document.querySelector('#nome')
const selectclasse = document.querySelector('#classe')
const inputnex = document.querySelector('#nex')
const btnenviar = document.querySelector('#enviar')
const escselectclasse = document.querySelector('#escclasse')
const minnex = document.querySelector('#minnex')
const maxnex = document.querySelector('#maxnex')
const btnshow = document.querySelector('#show')
const selecttela = document.querySelector('#res')
let agentes = []
btnenviar.addEventListener('click', ()=>{
    let agente = {nome:'',classe:'',nex:0}
    let nome = inputnome.value
    const classe = selectclasse.value
    let nex = inputnex.value
    console.log(nex.typef)
    const verificarspace = nome.indexOf(' ')
    if (nome.length > 0 && classe.length > 0 && nex.length > 0) {
        if (verificarspace > -1) {
            window.alert('Nome do agente possui espaços em branco, considerado apenas o seu primeiro nome.')
            nome = nome.split(' ')[0]
        }
        if (nome.length > 13) {
            window.alert('Nome grande demais, considerado apenas os 13 primeiros dígitos para facilitar a leitura.')
            nome = nome
        }
        if (nex < 0) {
            window.alert('Nex negativo, considerado o mesmo porem positivo.')
        }
        if (nex > 99) {
            window.alert('Nex maior que o máximo possível, considerado nex == 99%.')
            nex = 99
        }
    } else {
        window.alert('Faltam dados a serem preenchidos para que seja cadastrado o novo agente.')
    }
})