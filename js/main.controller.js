'use strict'

window.onload = onInit

function onInit() {
    initMemes()
    initGallery()
    initCanvas()
    initListeners()
    onShowEditor()
}

function initListeners() {
    $('header nav .editor').on('click', onShowEditor)
    $('header nav .gallery').on('click', onShowGallery)
    $('header nav .about').on('click', onToggleAbout)
    $('main.gallery img').on('click', onSelectImage)
    $('main.editor button.add-line').on('click', () => {
        addText()
        redrawCanvas()
    })
    $('main.editor button.select').on('click', onSelectNextTextLine)
    $('main.editor button.clear').on('click', () => {
        clearMeme()
        clearCanvas()
    })
    $('div.about .close').on('click', onCloseAbout)
}

function onShowEditor() {
    $('main.editor').removeClass('hidden')
    $('main.gallery').addClass('hidden')
}

function onShowGallery() {
    $('main.editor').addClass('hidden')
    $('main.gallery').removeClass('hidden')
}

function onSelectImage(ev) {
    createMeme(ev.target)
    redrawCanvas()
    onShowEditor()
}

function onSelectNextTextLine() {
    selectNextTextLine()
    redrawCanvas()
}

function onToggleAbout() {
    $('div.about').toggleClass('hidden')
}

function onCloseAbout() {
    $('div.about').addClass('hidden')
}