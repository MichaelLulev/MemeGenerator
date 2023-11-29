'use strict'

const DEFAULT_IMAGE_WIDTH = 400
const DEFAULT_IMAGE_HEIGHT = 400

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
    const width  = image.naturalWidth
    const height = image.naturalHeight
    gElCanvas.height = height / width * gElCanvas.width
    gCanvas.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(line) {
    const { text, font, fontSize, strokeColor, fillColor, justify, align, isSelected } = line
    const upperCaseText = text.toUpperCase()
    gCanvas.beginPath()
    gCanvas.font = `${fontSize}px ${font}`
    gCanvas.fillStyle = isSelected ? 'red' : fillColor
    gCanvas.strokeStyle = isSelected ? 'red' : strokeColor
    gCanvas.lineWidth = DEFAULT_LINE_WIDTH
    const textWidth = gCanvas.measureText(upperCaseText).width
    switch (justify) {
        case JUSTIFY_LEFT:
            var x = 0
            break
        case JUSTIFY_CENTER:
            var x = gElCanvas.width / 2 - textWidth / 2
            break
        case JUSTIFY_RIGHT:
            var x = gElCanvas.width - textWidth
            break
    }
    switch (align) {
        case ALIGN_TOP:
            var y = 0
            break
        case ALIGN_CENTER:
            var y = gElCanvas.height / 2 - fontSize / 2
            break
        case ALIGN_BOTTOM:
            var y = gElCanvas.height - fontSize
            break
    }
    gCanvas.strokeText(upperCaseText, x, y + fontSize)
    gCanvas.fillText(upperCaseText, x, y + fontSize)
}