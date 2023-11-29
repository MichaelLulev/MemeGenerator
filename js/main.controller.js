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
}

function onAddLine() {
    addLine()
    redrawCanvas()
}