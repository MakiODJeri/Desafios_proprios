const inputTittle = document.querySelector('#inputTittle')
const inputColor = document.querySelector('#inputColor')
const submitBtn = document.querySelector('#submitBtn')
const catalogDiv = document.querySelector('#catalogDiv')
let movieList = []
function createObject(color, tittle) {
    return {color: color, tittle: tittle}
}
function submitCatalog({color, tittle}) {
    const itemDiv = document.createElement('div')
    itemDiv.setAttribute('class','itemDiv')
    const colorDiv = document.createElement('div')
    colorDiv.setAttribute('style',`background: ${color}`)
    const tittleP = document.createElement('p')
    tittleP.innerHTML = tittle
    itemDiv.appendChild(colorDiv)
    itemDiv.appendChild(tittleP)
    movieList[movieList.length - 1].dom = itemDiv
    itemDiv.addEventListener('click', function() {
        const thisMovie = this
        movieList = movieList.filter((item)=>{
            if (item.dom != thisMovie) {
                return item
            }
        })
        catalogDiv.removeChild(thisMovie)
    }) 
    catalogDiv.appendChild(itemDiv)
} 
submitBtn.addEventListener('click', () => {
    const tittle = inputTittle.value
    const color = inputColor.value
    if (tittle.length > 0 && color.length > 0) {
        movieList.push(createObject(color, tittle))
        submitCatalog(movieList[movieList.length - 1])
        inputTittle.value = ''
        inputColor.value = ''
        inputTittle.focus()
    }
})