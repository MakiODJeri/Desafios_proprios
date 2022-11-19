function* numsprimos(num=1) {
    for (num; ;num++) {
        if (num != 2 && num % 2 > 0 && num % 3 > 0 || num == 2) {
            yield num
        }
    }
}
let num = 1
const itn = numsprimos()
for (let c = 0; c < 10; c++) {
    console.log(itn.next().value)
}