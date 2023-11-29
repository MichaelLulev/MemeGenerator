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
    const { text, font, fontSize, pos, isSelected, justify } = line
    gCanvas.beginPath()
    gCanvas.font = `bold ${fontSize}px ${font}`
    gCanvas.fillStyle = isSelected ? 'red' : 'black'
    const textWidth = gCanvas.measureText(text).width
    switch (justify) {
        case JUSTIFY_LEFT:
            pos.x = 0
            break
        case JUSTIFY_CENTER:
            pos.x = gElCanvas.width / 2 - textWidth / 2
            break
        case JUSTIFY_RIGHT:
            pos.x = gElCanvas.width - textWidth
            break
    }
    // TODO: calculate pos.y HERE instead of _createTextLine() and remove pos from line
    gCanvas.fillText(text, pos.x, pos.y + fontSize)
}