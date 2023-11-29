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
        if (element.type === TYPE_TEXT_LINE) drawText(element)
    })
}

function clearCanvas() {
    gCanvas.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    gElCanvas.width = DEFAULT_IMAGE_WIDTH
    gElCanvas.height = DEFAULT_IMAGE_HEIGHT
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

function drawText(line) {
    const { text, font, fontSize, pos, isSelected } = line
    gCanvas.beginPath()
    gCanvas.font = `bold ${fontSize}px ${font}`
    gCanvas.fillStyle = isSelected ? 'red' : 'black'
    gCanvas.fillText(text, pos.x, pos.y + fontSize)
}