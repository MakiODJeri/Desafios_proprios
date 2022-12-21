let elarray = []
for (let c = 0; c < 3; c++) {
    elarray.push(Math.floor(Math.random() * (10 - 1) + 1))
}
console.log(elarray)
const res = elarray.reduce((ant,atu,pos)=>{
    console.log(ant+atu,pos)
    return atu + ant
})
console.log(res)