import { CatImgs, CatInfo } from "./APIconteudo.js";



const placeImgs = async () => {
    const imgs = await CatImgs()
    const container = document.querySelector('section.container')
    const gridImgs = document.querySelectorAll('.pictures_grid img')

    container.style.backgroundImage = `url(${imgs[0]})`
    for (let i = 0; i < 10; i++) {
        if(imgs.length > i){
            gridImgs[i].setAttribute('src', imgs[i])
        }
        else{
            gridImgs[i].setAttribute('src', '../images/Conteudo/default.jpg')
        }
        
    }
    gridImgs.forEach((img) => {
        img.addEventListener('keyup', ({ key }) => {
            if(key == ' ' || key == 'Enter'){
                img.click()
            }
        })
    })
}
const placeInfo = async () => {
    const info = await CatInfo()
    const description = document.querySelector('.description p') 
    description.textContent = info[0]

    const catName = Array.from(document.querySelectorAll('.change'))
    catName.map((nome) => nome.textContent = info[1])
    document.title = info[1]

    const characteristics = document.querySelectorAll('.characteristic .content .stars')
    var q = 0
    for (let i = 0; i < info[2].length; i++) {
        for(let p = 0; p < 5; p++){
            if(info[2][i] > p){
                characteristics[p+q].setAttribute('src', '../images/Conteudo/assets/full_star.svg')
                characteristics[p+q].setAttribute('alt', 'full star')
            }
        }
        q = q + 5
    }
}
placeImgs()
placeInfo()