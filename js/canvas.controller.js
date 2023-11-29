'use strict'

var gElCanvas
var gCanvas

function initCanvas() {
    gElCanvas = $('canvas.meme')[0]
    gCanvas = gElCanvas.getContext('2d')
}

function redrawCanvas() {
    const currMeme = getCurrMeme()
    currMeme.elements.forEach(element => {
        if (element.type === 'line') drawLine(element)
    })
}

function drawLine(line) {
    const { text, font, fontSize, pos } = line
    gCanvas.beginPath()
    gCanvas.font = `${fontSize}px ${font}`
    gCanvas.fillText(text, pos.x, pos.y + fontSize)
}