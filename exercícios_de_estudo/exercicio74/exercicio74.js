const team1 = {
    nome: 'Abutres',
    membros: [
        'Arthur',
        'Balu',
        'Carina',
        'Dante',
        'Rubens'
    ]
}
function showAgents ({nome,membros}) {
    console.log('Equipe: ' + nome)
    console.log('======================================')
    for (i in membros) {
        console.log('Agente: ' + membros[i])
    }
}
showAgents(team1)
