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
    $('header nav .about').on('click', () => {
        $('div.about').toggleClass('hidden')
    })
    $('div.about .close').on('click', () => {
        $('div.about').addClass('hidden')
    })
}

function onAddLine() {
    addLine()
    redrawCanvas()
}