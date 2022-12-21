const d = function(n=1,bonper=0) {
    let list = []
    let vl = 0
    for (vl; vl < n; vl++) {
        list.push(Math.floor(Math.random() * (21 - 1) + 1) + bonper)
    }
    return list
}
const divide=new Function("v1","v2","return v1 / v2") 
console.log(d(2))
console.log(divide(3,4))