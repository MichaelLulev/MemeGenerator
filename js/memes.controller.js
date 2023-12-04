'use strict'

function initMemes() {
    renderMemes()
}

function renderMemes() {
    const myMemes = loadMemes()
    const elMemesGallery = el('.main-memes .gallery-layout')[0]
    elMemesGallery.innerText = ''
    var numMemes = 0
    myMemes.forEach((meme, idx) => {
        const elImageContainer = document.createElement('div')
        const previewImg = new Image()
        previewImg.src = meme.imageDataUrl
        previewImg.dataset.idx = idx
        elImageContainer.setAttribute('class', 'image-container')
        elImageContainer.appendChild(previewImg)
        elMemesGallery.appendChild(elImageContainer)
        numMemes++
    })
    if (! numMemes) elMemesGallery.innerText = 'No memes found'
}