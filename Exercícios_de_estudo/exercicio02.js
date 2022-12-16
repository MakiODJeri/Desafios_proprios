function verdadeirooufalsoaleatorio(min, max) {
    let num1 = Math.floor(Math.random() * ((max+1) - min) + min)
    let num2 = Math.floor(Math.random() * ((max+1) - min) + min)
    return res = (num1 > num2? `Verdadeiro: ${num1} é maior que ${num2}` : `Falso: ${num1} não é maior que ${num2}`)
}
for (let c = 0; c < 10; c++) {
    res = verdadeirooufalsoaleatorio(1,100) 
    console.log(res)
}