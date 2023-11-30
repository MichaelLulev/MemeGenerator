'use strict'

const MAX_FONT_SIZE = 4
const MIN_FONT_SIZE = 0.7

function initGallery() {
    initImages()
    renderSearhCloud()
    renderGallery()
}

function renderSearhCloud() {
    const searchCloud = getSearchCloud()
    const minSearches = Math.min(...Object.values(searchCloud))
    const maxSearches = Math.max(...Object.values(searchCloud))
    var strHtml = ''
    for (let [word, numSearches] of Object.entries(searchCloud)) {
        const fontSize = numSearches / maxSearches * (MAX_FONT_SIZE - MIN_FONT_SIZE) + MIN_FONT_SIZE
        strHtml += `
            <span style="font-size: ${fontSize}rem;">${word}</span>`
    }
    el('main.gallery .search-cloud').html(strHtml)
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