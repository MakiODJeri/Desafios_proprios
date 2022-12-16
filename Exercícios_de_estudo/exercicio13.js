function* numsprimos(num=1) {
    for (num; ;num++) {
        if (num % 2 > 0 && num % 5 > 0 && num % 3 > 0 && num % 7 > 0|| num == 2 || num == 5 || num == 3 || num == 7) {
            yield num
        }
    }
}
let num = 1
const itn = numsprimos()
for (let c = 0; c < 64; c++) {
    console.log(itn.next().value)
}