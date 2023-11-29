'use strict'

var gElCanvas
var gCanvas

function initCanvas() {
    gElCanvas = $('canvas.meme')[0]
    gCanvas = gElCanvas.getContext('2d')
}

function redrawCanvas() {
    const currMeme = getCurrMeme()
    clearCanvas()
    if (currMeme.image) drawImage(currMeme.image)
    currMeme.elements.forEach(element => {
        if (element.type === 'line') drawLine(element)
    })
}

function clearCanvas() {
    gCanvas.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function drawImage(image) {
    const currMeme = getCurrMeme()
    const width  = image.naturalWidth
    const height = image.naturalHeight
    gElCanvas.height = height / width * gElCanvas.width
    currMeme.width = gElCanvas.width
    currMeme.height = gElCanvas.height
    gCanvas.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawLine(line) {
    const { text, font, fontSize, pos } = line
    gCanvas.beginPath()
    gCanvas.font = `${fontSize}px ${font}`
    gCanvas.fillText(text, pos.x, pos.y + fontSize)
}