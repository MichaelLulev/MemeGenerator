'use strict'

window.onload = onInit

function onInit() {
    initMemes()
    initListeners()
    initCanvas()
}

function initListeners() {
    $('.add-line').on('click', onAddLine)
}

function onAddLine() {
    addLine()
    redrawCanvas()
}