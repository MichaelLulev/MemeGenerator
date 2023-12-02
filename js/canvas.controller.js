'use strict'

const DEFAULT_IMAGE_WIDTH = 400
const DEFAULT_IMAGE_HEIGHT = 400

const PADDING_TOP = 0
const PADDING_BOTTOM = 10
const PADDING_LEFT = 10
const PADDING_RIGHT = 10

const CIRCLE_RADIUS = 6
const DEFAULT_LINE_WIDTH_RATIO = 0.1

var gElCanvas
var gCanvas

function initCanvas() {
    gElCanvas = el('canvas.meme')[0]
    gCanvas = gElCanvas.getContext('2d')
    gElCanvas.width = DEFAULT_IMAGE_WIDTH
    gElCanvas.height = DEFAULT_IMAGE_HEIGHT
}

function redrawCanvas() {
    const currMeme = getCurrMeme()
    clearCanvas()
    if (currMeme.image) drawImage(currMeme.image)
    currMeme.elements.forEach(element => {
        drawElement(element)
    })
}

function clearCanvas() {
    gCanvas.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function drawImage(image) {
    const width  = image.naturalWidth
    const height = image.naturalHeight
    gElCanvas.height = height / width * gElCanvas.width
    gCanvas.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawElement(element) {
    const { type, text, font, fontSize, strokeColor, fillColor, justify, align, pos, angle, isSelected } = element
    const upperCaseText = text.toUpperCase()
    gCanvas.beginPath()
    gCanvas.font = `${fontSize}px "${font}"`
    gCanvas.fillStyle = fillColor
    gCanvas.strokeStyle = strokeColor
    gCanvas.lineWidth = DEFAULT_LINE_WIDTH_RATIO * fontSize
    const textWidth = gCanvas.measureText(upperCaseText).width
    // pos.width = textWidth + (type === TYPE_TEXT_LINE ? 7 : -4)
    // pos.height = fontSize + (type === TYPE_EMOJI ? 10 : 0)
    pos.width = textWidth
    pos.height = fontSize
    if (pos.x === undefined) {
        switch (justify) {
            case JUSTIFY_LEFT:
                pos.x = 0 + PADDING_LEFT
                break
            case JUSTIFY_CENTER:
                pos.x = gElCanvas.width / 2 - textWidth / 2
                break
            case JUSTIFY_RIGHT:
                pos.x = gElCanvas.width - textWidth - PADDING_RIGHT
                break
        }
    }
    if (pos.y === undefined) {
        switch (align) {
            case ALIGN_TOP:
                pos.y = 0 + PADDING_TOP
                break
            case ALIGN_CENTER:
                pos.y = gElCanvas.height / 2 - fontSize / 2
                break
            case ALIGN_BOTTOM:
                pos.y = gElCanvas.height - fontSize - PADDING_BOTTOM
                break
        }
    }
    // pos.leftX = pos.x + (type === TYPE_EMOJI ? 2 : -4)
    // pos.rightX = pos.x + pos.width
    // pos.topY = pos.y + (type === TYPE_EMOJI ? 1 : 4)
    // pos.bottomY = pos.y + fontSize
    pos.leftX = pos.x
    pos.rightX = pos.x + pos.width
    pos.topY = pos.y
    pos.bottomY = pos.y + fontSize
    // pos.line1 = lineParams(pos.leftX, pos.topY, pos.rightX, pos.topY)
    // pos.line2 = lineParams(pos.leftX, pos.bottomY, pos.rightX, pos.bottomY)
    // pos.line3 = lineParams(pos.leftX, pos.bottomY, pos.leftX, pos.topY)
    // pos.line4 = lineParams(pos.rightX, pos.bottomY, pos.rightX, pos.topY)
    // pos.line1 = rotateLineAroundPoint(pos.line1, pos.x, pos.y, angle)
    // pos.line2 = rotateLineAroundPoint(pos.line2, pos.x, pos.y, angle)
    // pos.line3 = rotateLineAroundPoint(pos.line3, pos.x, pos.y, angle)
    // pos.line4 = rotateLineAroundPoint(pos.line4, pos.x, pos.y, angle)
    gCanvas.translate(pos.x, pos.y)
    gCanvas.rotate(angle)
    if (type === TYPE_TEXT_LINE) {
        gCanvas.strokeText(upperCaseText, 0, fontSize)
    }
    gCanvas.fillText(upperCaseText, 0, fontSize)
    gCanvas.rotate(0)
    gCanvas.setTransform(1, 0, 0, 1, 0, 0)
    if (isSelected) {
        gCanvas.lineWidth = 2
        gCanvas.strokeStyle = 'white'
        gCanvas.strokeRect(pos.leftX, pos.topY, pos.width, pos.height)
        gCanvas.strokeStyle = 'black'
        gCanvas.setLineDash([5, 5])
        gCanvas.strokeRect(pos.leftX, pos.topY, pos.width, pos.height)
        gCanvas.setLineDash([])
        gCanvas.beginPath()
        gCanvas.strokeStyle = 'white'
        gCanvas.arc(pos.rightX, pos.topY, CIRCLE_RADIUS, 0, Math.PI * 2)
        gCanvas.fill()
        gCanvas.strokeStyle = 'black'
        gCanvas.arc(pos.rightX, pos.topY, CIRCLE_RADIUS, 0, Math.PI * 2)
        gCanvas.stroke()
        gCanvas.setLineDash([])
    }
}