'use strict'

function initMemes() {
    renderMyMemes()
}

function renderMyMemes() {
    const myMemes = loadMemes()
    const elMyMemes = el('.main-memes .gallery-layout')[0]
    elMyMemes.innerText = ''
    var numMemes = 0
    myMemes.forEach((meme, idx) => {
        const div = document.createElement('div')
        const previewImg = new Image()
        const memeImg = new Image()
        previewImg.src = meme.imageDataUrl
        previewImg.dataset.idx = idx
        memeImg.src = meme.imageSrc
        meme.image = memeImg
        div.setAttribute('class', 'image-container')
        div.appendChild(previewImg)
        elMyMemes.appendChild(div)
        numMemes++
        console.log(previewImg)
        console.log(memeImg)
    })
    if (! numMemes) elMyMemes.innerText = 'Didn\'t find any images'
}