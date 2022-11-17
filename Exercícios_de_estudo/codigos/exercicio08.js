"use strict"
function nomegenero() {
    var numr = Math.floor(Math.random() * (4 - 1) + 1)   
    if (numr == 1) {
        var nome = 'Gustavo'
    } else if (numr == 2) {
        var nome = 'Rebbeca'
    } else {
        var nome = 'Cris'
    }
    return nome //Qualquer um seja acima ou abaixo tera acesso a essa var
}
function elemento() {
    let numr = Math.floor(Math.random() * (6 - 1) + 1)
    let elem = ''
    if (numr == 1) {
        elem = 'Sangue'
    } else if (numr == 2) {
        elem = 'Conhecimento'
    } else if (numr == 3) {
        elem = 'Energia'
    } else if (numr == 4) {
        elem = 'Morte'
    } else {
        elem = 'Medo'
    }
    return elem //Ninguém abaixo de let vai ter acesso a ela  
}
function corfav() {
    let numr = Math.floor(Math.random() * (4 - 1) + 1)
    if (numr == 1) {
        const cor = 'blue'
        return cor
    } else if (numr == 2) {
        const cor = 'green'
        return cor
    } else {
        const cor = 'purple'
        return cor
    }
    // const == Um valor imutável
}
console.log(nomegenero())
console.log(elemento())
console.log(corfav())