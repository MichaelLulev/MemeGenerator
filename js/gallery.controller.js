'use strict'

function initGallery() {
    initImages()
    renderGallery()
}

function renderGallery() {
    const images = getImages()
    const strHtml = images.reduce((strHtml, image) => {
        return strHtml + `
        <img src="img/gallery/${image.name}" alt="meme-image-${image.name}">`
    }, '')
    el('.gallery .image-container').html(strHtml)
}