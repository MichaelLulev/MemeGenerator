'use strict'

window.onload = onInit

function onInit() {
    initMemes()
    initGallery()
    initCanvas()
    initListeners()
}

function initListeners() {
    $('header nav .editor').on('click', showEditor)
    $('header nav .gallery').on('click', showGallery)
    $('header nav .about').on('click', toggleAbout)
    $('main.gallery img').on('click', ev => {
        createMeme(ev.target)
        redrawCanvas()
        showEditor()
    })
    $('main.editor button.add-line').on('click', () => {
        addLine()
        redrawCanvas()
    })
    $('main.editor button.clear').on('click', () => {
        clearMeme()
        clearCanvas()
    })
    $('div.about .close').on('click', closeAbout)
}

function showEditor() {
    $('main.editor').removeClass('hidden')
    $('main.gallery').addClass('hidden')
}

function showGallery() {
    $('main.editor').addClass('hidden')
    $('main.gallery').removeClass('hidden')
}

function toggleAbout() {
    $('div.about').toggleClass('hidden')
}

function closeAbout() {
    $('div.about').addClass('hidden')
}