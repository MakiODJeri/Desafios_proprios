const arraylist = document.querySelector('#arraylist')
const resultado = document.querySelector('#resultado')
const caixatxt1 = document.querySelector('#digite1')
const adicionar = document.querySelector('#inserir')
let listaele = []
const caixatxt2 = document.querySelector('#digite2')
const procurar = document.querySelector('#procurar')
let listares = []
adicionar.addEventListener('click',()=>{
    const valor = caixatxt1.value
    if (valor.length > 0) {
        listaele.push(valor)
        arraylist.innerHTML = ''
        listaele.map((vl)=>{
            arraylist.innerHTML += vl + '... '
        })
        caixatxt1.value = ''
        caixatxt1.focus()
    } else {
        window.alert('Digite algum valor na caixa de texto "Inserir" para adicionar algum valor ao "Array".')
    }
})
procurar.addEventListener('click', ()=>{
    const vlseek = caixatxt2.value
    if (listaele.length == 0) {
        window.alert('Insira algum valor em "Array" antes de fazer uma procura.')
        caixatxt2.value = ''
        caixatxt1.focus()
    } else if (vlseek.length > 0) {
        listares = []
        const retorno = listaele.find((vl,ind)=>{
            if (vl.toUpperCase() == vlseek.toUpperCase()) {
                listares.push(vl)
                listares.push(ind)
                return true
            }
        })
        if (retorno) {
              resultado.innerHTML = `${listares[0]} está em "Array", ela é a ${listares[1] + 1}a string, na posição ${listares[1]}.`
        } else {
            resultado.innerHTML = `${vlseek} não está em "Array".`
        }
        caixatxt2.value = ''
        caixatxt2.focus()
    } else {
        window.alert('Digite algum valor na caixa de texto "Encontrar" para procurar algum valor no "Array".')
        caixatxt2.focus() 
    }
})