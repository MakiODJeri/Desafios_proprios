const operacoes=[
    (val=0)=>{
        let res = []
        for (let c of val) {
            res.unshift(c * 2)
        }
        return res
        
    },
    (val=0)=>{
        let res = []
        for (let c of val) {
             res.unshift(c / 2)
        }
        return res
    },
    (val=0)=>{
        let res = []
        for (let c of val) {
            res.unshift(c ** 2)
        }
        return res
    }
]
const lista_de_nums = [5,4,10,2]
console.log(operacoes[0](lista_de_nums))
console.log(operacoes[1](lista_de_nums))
console.log(operacoes[2](lista_de_nums))