function metadedodobro(...valores) {

    let metade=(vals)=>{
        for (let c in vals) {
            vals[c] /= 2
        }
        return vals
    }

    let dobro=(vals)=>{
        for (let c in vals) {
            vals[c] *= 2
        }
        return vals
    }
    let total = []
    total += 'Original='
    total += valores
    total += ' Dobro='
    total += dobro(valores)
    total += ' Metade='
    total += metade(valores)
    return(total)
}
console.log(metadedodobro(130,33,50))