'use strict'

function initGallery() {
    initImages()
    renderGallery()
}

function renderGallery() {
    const images = getImages()
    var strHtml = images.reduce((strHtml, image) => {
        return strHtml + `
        <img src="img/gallery/${image.name}" alt="meme-image-${image.name}">`
    }, '')
    if (! strHtml) strHtml = 'Didn\'t find any images'
    el('.gallery .image-container').html(strHtml)
}