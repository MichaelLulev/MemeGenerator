'use strict'

const MAX_FONT_SIZE = 3.5
const MIN_FONT_SIZE = 0.7

function initGallery() {
    initImages()
    renderSearhCloud()
    renderSearchDatalist()
    renderGallery()
}

function renderSearhCloud() {
    const searchCloud = getSearchCloud()
    const maxSearches = Math.max(...Object.values(searchCloud))
    var strHtml = ''
    for (let [word, numSearches] of Object.entries(searchCloud)) {
        const fontSize = numSearches / maxSearches * (MAX_FONT_SIZE - MIN_FONT_SIZE) + MIN_FONT_SIZE
        strHtml += `
            &nbsp;<span class="tag" style="font-size: ${fontSize}rem;">${word}</span>`
    }
    el('.search-cloud').html(strHtml)
}

function renderSearchDatalist() {
    const allTagWords = getAllTagWords()
    const strHtml = allTagWords.reduce((strHtml, tagWord) => {
        return strHtml + `
            <option value="${tagWord}"></option>`
    }, '')
    el('#tags').html(strHtml)
}

function renderGallery() {
    const images = getImages()
    var strHtml = images.reduce((strHtml, image) => {
        return strHtml + `
            <div class="image-container">
                <img src="img/gallery/${image.name}"
                     alt="meme-image-${image.name}"
                     title="${image.searchTags.join(', ')}"
                     draggable="false">
            </div>`
    }, '')
    if (! strHtml) strHtml = 'Didn\'t find any images'
    el('.main-gallery .gallery-layout').html(strHtml)
}