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
let peneira = []
const flipar=(num)=>{
    return num / -1
}
const nove=(num)=>{
    return 99
}
const mostrar=(pers)=>{
    selecttela.innerHTML = ''
    pers.map((el)=>{
        const opt = document.createElement('option')
        opt.innerHTML += el.nome + ' '
        opt.innerHTML += el.classe + ' '
        opt.innerHTML += el.nex + '% '
        selecttela.appendChild(opt)
    })
}
btnenviar.addEventListener('click', ()=>{
    let agente = {nome:'',classe:'',nex:0}
    let nome = inputnome.value
    const classe = selectclasse.value
    let nex = inputnex.value
    const verificarspace = nome.indexOf(' ')
    if (nome.length > 0 && classe.length > 0 && nex.length > 0) {
        if (verificarspace > -1) {
            window.alert('Nome do agente possui espaços em branco, considerado apenas o seu primeiro nome.')
            nome = nome.split(' ')[0]
        }
        if (nome.length > 13) {
            window.alert('Nome grande demais, considerado apenas os 13 primeiros dígitos para facilitar a leitura.')
            nome = nome.slice(1, 13)
        }
        if (nex < 0) {
            window.alert('Nex negativo, considerado o mesmo porem positivo.')
            nex = nex / -1
        }
        if (nex > 99) {
            window.alert('Nex maior que o máximo possível, considerado nex == 99%.')
            nex = 99
        }
        agente.nome = nome
        agente.classe = classe
        agente.nex = nex
        agentes.push(agente)
        inputnome.value = ''
        inputnex.value = ''
        mostrar(agentes)
    } else {
        window.alert('Faltam dados a serem preenchidos para que seja cadastrado o novo agente.')
    }
})
btnshow.addEventListener('click', ()=>{
    const classeesc = escselectclasse.value
    let minnexesc = minnex.value
    let maxnexesc = maxnex.value
    if (minnexesc.length > 0 && maxnexesc.length > 0) {
        if (minnex < 0 || maxnexesc < 0) {
            window.alert('O valor mínimo de nex para a busca é 0, considerado mesmo valor porem positivo.')
            if (minnexesc < 0) {
                minnexesc = flipar(minnexesc)
            }
            if (maxnexesc < 0) {
                maxnexesc = flipar(maxnexesc)
            }
        }
        if (minnexesc > 99 || maxnexesc > 99) {
            window.alert('O valor máximo de nex para a busca é 99.')
            if (minnexesc > 99) {
                minnexesc = nove(minnexesc)
            }
            if (maxnexesc > 99) {
                maxnexesc = nove(maxnexesc)
            }
        }
        if (minnexesc > maxnexesc) {
            const aux = maxnexesc
            maxnexesc = minnexesc
            minnexesc = aux
            console.log(maxnexesc, minnexesc)
        }
        peneira = []
        agentes.map((el)=>{
            if (el.classe == classeesc) {
                if (el.nex >= minnexesc) {
                    if (el.nex <= maxnexesc) {}
                        peneira.push(el)
                        console.log(peneira)
                    }
                }
            } 
        )
        mostrar(peneira)
    } else {
        window.alert('Faltam dados para que a procura de agentes seja realizada')
    }
})
