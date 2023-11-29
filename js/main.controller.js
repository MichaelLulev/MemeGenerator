'use strict'

window.onload = onInit

function onInit() {
    initMemes()
    initGallery()
    initCanvas()
    initListeners()
}

function initListeners() {
    $('.add-line').on('click', onAddLine)
    $('header nav .editor').on('click', () => {
        $('main.meme-editor').removeClass('hidden')
        $('main.gallery').addClass('hidden')
    })
    $('header nav .gallery').on('click', () => {
        $('main.meme-editor').addClass('hidden')
        $('main.gallery').removeClass('hidden')
    })
}

function onAddLine() {
    addLine()
    redrawCanvas()
}