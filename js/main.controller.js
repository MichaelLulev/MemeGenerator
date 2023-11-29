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
    $('main.editor button.add-line').on('click', onAddLine)
    $('main.editor button.select').on('click', onSelectNextTextLine)
    $('main.editor button.justify-left').on('click', onJustifyLeft)
    $('main.editor button.justify-center').on('click', onJustifyCenter)
    $('main.editor button.justify-right').on('click', onJustifyRight)
    $('main.editor button.increase').on('click', onIncreaseFont)
    $('main.editor button.decrease').on('click', onDecreaseFont)
    $('main.editor button.clear').on('click', onClear)
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

function onAddLine() {
    addText()
    redrawCanvas()
}

function onJustifyLeft() {
    justifyTextLine(JUSTIFY_LEFT)
    redrawCanvas()
}

function onJustifyCenter() {
    justifyTextLine(JUSTIFY_CENTER)
    redrawCanvas()
}

function onJustifyRight() {
    justifyTextLine(JUSTIFY_RIGHT)
    redrawCanvas()
}

function onIncreaseFont() {
    changeFontSize(INCREASE_AMOUNT)
    redrawCanvas()
}

function onDecreaseFont() {
    changeFontSize(DECREASE_AMOUNT)
    redrawCanvas()
}

function onClear() {
    clearMeme()
    clearCanvas()
}

function onToggleAbout() {
    $('div.about').toggleClass('hidden')
}

function onCloseAbout() {
    $('div.about').addClass('hidden')
}