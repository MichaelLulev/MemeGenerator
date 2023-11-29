'use strict'

var gElCanvas
var gCanvas

function initCanvas() {
    gElCanvas = $('canvas.meme')[0]
    gCanvas = gElCanvas.getContext('2d')
}

function redrawCanvas() {
    const currMeme = getCurrMeme()
    currMeme.elements.forEach(elements => {

    })
}