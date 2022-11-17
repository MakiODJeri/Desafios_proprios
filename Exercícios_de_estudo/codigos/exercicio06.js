function somar(...valores) {
    let res = 0
    for (let c = 0;c < valores.length; c++) {
        res += valores[c]
    }
    return res
}
let val1 = 2
let val2 = 6
let val3 = 4
console.log(somar(val1,val2)) 