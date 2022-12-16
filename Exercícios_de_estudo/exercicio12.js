function* testepericia(dnums=1, bonus=0) {
    let dvls = []
    for (let c = 0; c < dnums; c++) {
        dvls.push(Math.floor(Math.random() * (21 - 1) + 1))
    }
    yield dvls
    for (c in dvls) {
        dvls[c] += bonus
    }
    yield dvls
}
const itd=testepericia(2,5)
console.log(itd.next().value)
console.log(itd.next().value)