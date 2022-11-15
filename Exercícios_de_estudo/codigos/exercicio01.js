console.log('Bitwise')
let n1 = 13 //1101
let n2 = 14 //1110
let and = n1 & n2 //1100 apenas 1 aonde são valores iguais e 0 aonde são valores diferentes
let pipe = n1 | n2 //1111 1 aonde tem um dependente se tem em um e não tem em outro 
let sor = n1 ^ n2 //0011 1 apenas aonde tem 1 um apenas um dos valores quando são iguais adiciona-se 0
let dese = n1 << 1 //11010 move para a esquerda (multiplica por 2)
let desd = n2 >> 1 //01110 move para a direita (divide por 2)
console.log(and, pipe, sor, dese, desd)
dese = dese << 1 //110100 
desd = desd >> 1 //001101 
console.log(dese, desd) 
 