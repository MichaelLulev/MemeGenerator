'use strict'

function initGallery() {
    renderGallery()
}

function renderGallery() {
    var strHtml = ''
    for (let i = 1; i <= 25; i++) {
        strHtml += `
        <img src="/img/gallery/${i}.jpg" alt="meme-image-${i}">`
    }
    $('.gallery .image-container').html(strHtml)
}