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

function getImageDataUrl() {
    return gElCanvas.toDataURL()
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
    // pos.leftX = pos.x + (type === TYPE_EMOJI ? 2 : -4)
    // pos.rightX = pos.x + pos.width
    // pos.topY = pos.y + (type === TYPE_EMOJI ? 1 : 4)
    // pos.bottomY = pos.y + fontSize
    if (pos.x === undefined) pos.x = 0
    if (pos.y === undefined) pos.y = 0
    pos.leftX = pos.x
    pos.rightX = pos.x + pos.width
    pos.topY = pos.y
    pos.bottomY = pos.y + fontSize
    pos.points = []
    pos.points.push([pos.leftX, pos.topY])
    pos.points.push([pos.rightX, pos.topY])
    pos.points.push([pos.rightX, pos.bottomY])
    pos.points.push([pos.leftX, pos.bottomY])
    pos.points[1] = rotatePointAroundPoint(pos.points[1], pos.points[0], angle)
    pos.points[2] = rotatePointAroundPoint(pos.points[2], pos.points[0], angle)
    pos.points[3] = rotatePointAroundPoint(pos.points[3], pos.points[0], angle)
    pos.x = pos.points[0][0]
    pos.y = pos.points[0][1]
    pos.leftX = pos.x
    pos.rightX = pos.x + pos.width
    pos.topY = pos.y
    pos.bottomY = pos.y + fontSize
    pos.lines = []
    pos.lines[0] = lineParams(pos.points[0], pos.points[1])
    pos.lines[1] = lineParams(pos.points[2], pos.points[3])
    pos.lines[2] = lineParams(pos.points[1], pos.points[2])
    pos.lines[3] = lineParams(pos.points[3], pos.points[0])
    // if (justify) {
    //     const minX = pos.points.reduce((minX, point) => Math.min(minX, point[0]), Infinity)
    //     const maxX = pos.points.reduce((maxX, point) => Math.max(maxX, point[0]), -Infinity)
    //     var diffX
    //     switch (justify) {
    //         case JUSTIFY_LEFT:
    //             diffX = minX - PADDING_LEFT
    //             pos.points.forEach(point => point[0] -= diffX)
    //             break
    //         case JUSTIFY_CENTER:
    //             diffX = minX - (gElCanvas.width / 2 - (maxX - minX) / 2)
    //             pos.points.forEach(point => point[0] -= diffX)
    //             break
    //         case JUSTIFY_RIGHT:
    //             diffX = maxX - (gElCanvas.width - (maxX - minX) - PADDING_RIGHT)
    //             pos.points.forEach(point => point[0] -= diffX)
    //             break
    //     }
    //     element.justify = undefined
    // }
    // if (align) {
    //     const minY = pos.points.reduce((minY, point) => Math.min(minY, point[1]), Infinity)
    //     const maxY = pos.points.reduce((maxY, point) => Math.max(maxY, point[1]), -Infinity)
    //     var diffY
    //     switch (align) {
    //         case ALIGN_TOP:
    //             diffY = minY - PADDING_TOP
    //             pos.points.forEach(point => point[1] -= diffY)
    //             break
    //         case ALIGN_CENTER:
    //             diffY = minY - (gElCanvas.height / 2 - (maxY - minY) / 2)
    //             pos.points.forEach(point => point[1] -= diffY)
    //             break
    //         case ALIGN_BOTTOM:
    //             diffY = maxY - (gElCanvas.height - (maxY - minY) - PADDING_BOTTOM)
    //             pos.points.forEach(point => point[1] -= diffY)
    //             break
    //     }
    //     element.align = undefined
    // }
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
        // gCanvas.strokeRect(pos.leftX, pos.topY, pos.width, pos.height)
        drawPoligon(...pos.points)
        gCanvas.stroke()
        gCanvas.strokeStyle = 'black'
        gCanvas.setLineDash([5, 5])
        // gCanvas.strokeRect(pos.leftX, pos.topY, pos.width, pos.height)
        drawPoligon(...pos.points)
        gCanvas.stroke()
        gCanvas.setLineDash([])
        gCanvas.beginPath()
        gCanvas.strokeStyle = 'white'
        // gCanvas.arc(pos.rightX, pos.topY, CIRCLE_RADIUS, 0, Math.PI * 2)
        gCanvas.arc(...pos.points[1], CIRCLE_RADIUS, 0, Math.PI * 2)
        gCanvas.fill()
        gCanvas.strokeStyle = 'black'
        gCanvas.arc(...pos.points[1], CIRCLE_RADIUS, 0, Math.PI * 2)
        gCanvas.stroke()
        gCanvas.setLineDash([])
    }
}

function drawPoligon(...points) {
    if (points.length === 0) return
    var currPoint = points[0]
    gCanvas.moveTo(...currPoint)
    for (var i = 1; i < points.length; i++) {
        currPoint = points[i]
        gCanvas.lineTo(...currPoint)
    }
    gCanvas.closePath()
}