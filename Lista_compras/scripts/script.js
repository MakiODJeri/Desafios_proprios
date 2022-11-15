function adicionar() {
    let nome = document.getElementById('ad').value
    if (nome.length == 0) {
        window.alert('Erro: Digite algum nome na caixa para adicionar a lista de compras')
    } else {
        let lista = document.querySelector('ol#items')
        let item = document.createElement('li')
        item.innerHTML = nome
        lista.appendChild(item)
    }
    document.getElementById('ad').value = ''
    document.getElementById('ad').focus()
}
function remover() {
    let num = document.getElementById('rm').value - 1
    let lista = document.querySelector('ol#items')
    let tantos = document.querySelector('ol#items').value
    lista.removeChild(lista.children[num])
    document.getElementbyId('rm').value = ''
    document.getElementById('rm').focus()
}