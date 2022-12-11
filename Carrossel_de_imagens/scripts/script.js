const imagens = [...document.querySelectorAll('.imagem')]
const esquerda = document.querySelector('#esquerda')
const direita = document.querySelector('#direita')
let lista_nomes = ['Img1','Img2','Img3','Img4','Img5','Img6']
let c = 0
imagens.map((imagem)=>{
    imagem.innerHTML = lista_nomes[c]
    c++
})
const clicar_d=(lista)=>{
    c = c - 2
    lista.map((imagem)=>{
        imagem.innerHTML = lista_nomes[c]
        c++
    })
}
direita.addEventListener('click', ()=>{
    clicar_d(imagens)
})
esquerda.addEventListener('click',()=>{
})