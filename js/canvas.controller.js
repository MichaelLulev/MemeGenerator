'use strict'

const DEFAULT_IMAGE_WIDTH = 400
const DEFAULT_IMAGE_HEIGHT = 400

var gElCanvas
var gCanvas

function initCanvas() {
    gElCanvas = el('canvas.meme')[0]
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
    const { text, font, fontSize, strokeColor, fillColor, justify, align, pos, isSelected } = line
    const upperCaseText = text.toUpperCase()
    gCanvas.beginPath()
    gCanvas.font = `${fontSize}px ${font}`
    gCanvas.fillStyle = fillColor
    gCanvas.strokeStyle = strokeColor
    gCanvas.lineWidth = DEFAULT_LINE_WIDTH
    if (! pos.x) {
        const textWidth = gCanvas.measureText(upperCaseText).width
        pos.width = textWidth
        pos.height = fontSize
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
        switch (align) {
            case ALIGN_TOP:
                pos.y = 0
                break
            case ALIGN_CENTER:
                pos.y = gElCanvas.height / 2 - fontSize / 2
                break
            case ALIGN_BOTTOM:
                pos.y = gElCanvas.height - fontSize
                break
        }
        pos.leftX = pos.x
        pos.rightX = pos.x + pos.width
        pos.topY = pos.y
        pos.bottomY = pos.y + fontSize
    }
    gCanvas.strokeText(upperCaseText, pos.x, pos.y + fontSize)
    gCanvas.fillText(upperCaseText, pos.x, pos.y + fontSize)
    if (isSelected) {
        gCanvas.lineWidth = 2
        gCanvas.strokeStyle = 'white'
        gCanvas.strokeRect(pos.leftX - 2, pos.topY + 4, pos.width + 2, pos.height)
        gCanvas.strokeStyle = 'black'
        gCanvas.setLineDash([5, 5])
        gCanvas.strokeRect(pos.leftX - 2, pos.topY + 4, pos.width + 2, pos.height)
        gCanvas.setLineDash([])
    }
}