'use strict'

window.onload = onInit

function onInit() {
    initListeners()
}

function initListeners() {
    $('.add-line').on('click', onAddLine)
}

function onAddLine() {
    addLine()
    redrawCanvas()
}