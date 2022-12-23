const tabela = document.querySelector('#tabela')
const lista_itemUm = [...document.querySelectorAll('.itemUm')]
const lista_itemDois = [...document.querySelectorAll('.itemDois')]
const lista_itemTres = [...document.querySelectorAll('.itemTres')]
const btn_imprimir = document.querySelector('#imprimir')
const gerar_aleatorio=(max,min)=>{
    return Math.floor(Math.random() * ((max+1)-min)+min)
}
const adci_valores=()=>{
    let lista = []
    lista.push(gerar_aleatorio(7,1))
    lista.push(gerar_aleatorio(4,1))
    lista.push(gerar_aleatorio(30,1))
    lista.push(0)
    return lista
}
const mostrar_valores=(vals,domel)=>{
    for (let c = 0; c < 3; c++) {
        domel[c].innerHTML = vals[c]
    }
}
let vals_itemUm = adci_valores()
mostrar_valores(vals_itemUm,lista_itemUm)
let vals_itemDois = adci_valores()
mostrar_valores(vals_itemDois,lista_itemDois)
let vals_itemTres = adci_valores()
mostrar_valores(vals_itemTres,lista_itemTres)
btn_imprimir.addEventListener('click', ()=>{
    const conteudo = tabela.innerHTML

    let estilo = '<style>'
    estilo += `table {
        width: 450px;
        border: 1px solid black;
        margin: auto;
        border-collapse: collapse;
    }`
    estilo += `th,td {
        width: 100px;
        border: 1px solid black;
        text-align: center;
    }`
    estilo += '</style>'

    const janela = window.open('','','height=500,width=500')

    janela.document.write('<html><head>')
    janela.document.write('<tittle>Tela para impressão</tittle>')
    janela.document.write(estilo)
    janela.document.write('</head>')
    janela.document.write('<body>')
    janela.document.write(conteudo)
    janela.document.write('</body></html>')

    janela.print()
})