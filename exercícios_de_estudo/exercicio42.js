const Lojas=function(preco_original,val_lucro,num_vendas){
    this.preco_original = preco_original
    this.preco_venda = preco_original + val_lucro
    this.num_vendas = num_vendas
}
Lojas.prototype.lucro=function(){
    return (this.preco_venda - this.preco_original) * this.num_vendas
}
Lojas.prototype.info=function(){
    console.log(`Preço original: ${this.preco_original}`)
    console.log(`Preço da venda: ${this.preco_venda}`)
    console.log(`Número de vendas: ${this.num_vendas}`)
    console.log(`Lucro das vendas: ${(this.preco_venda - this.preco_original) * this.num_vendas}`)
}
const Loja1 =new Lojas(30,5,10)
Loja1.info()