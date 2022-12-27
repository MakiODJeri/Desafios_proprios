let x = Math.floor(Math.random() * (11 - 1) + 1)
function fora() {
    let x = 5
    function dobro () {
        return x * 2
    }
    return dobro
}
module.exports = fora()