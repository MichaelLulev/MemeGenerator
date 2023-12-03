'use strict'

const DEFAULT_LINE_TEXT = 'text line '
const DEFAULT_EMOJI = '😀'
const DEFAULT_FONT = 'Impact'
const DEFAULT_FONT_SIZE = 40
const DEFAULT_STROKE_COLOR = '#000000'
const DEFAULT_FILL_COLOR = '#ffffff'

const TYPE_TEXT_LINE = 'textLine'
const TYPE_EMOJI = 'emoji'

const JUSTIFY_LEFT = 'justifyLeft'
const JUSTIFY_CENTER = 'justifyCenter'
const JUSTIFY_RIGHT = 'justifyRight'

const ALIGN_TOP = 'alignTop'
const ALIGN_CENTER = 'alignCenter'
const ALIGN_BOTTOM = 'alignBottom'

const INCREASE_AMOUNT = 1
const DECREASE_AMOUNT = -1

var gCurrMeme
var gSelectedElement
var gNextElementId

var gPrevX
var gPrevY

var gPrevCircleX
var gPrevCircleY
var gOriginalFontSize

function initEditor() {
    gNextElementId = 1
    deleteMeme()
    initCanvas()
}

function saveMeme() {
    var myMemes = loadFromStorage('myMemes')
    if (! myMemes) myMemes = []
    gCurrMeme.imageDataUrl = getImageDataUrl()
    myMemes.push(gCurrMeme)
    saveToStorage('myMemes', myMemes)
}

function loadMemes() {
    var myMemes = loadFromStorage('myMemes')
    if (! myMemes) myMemes = []
    return myMemes
}

function setCurrMeme(meme) {
    gCurrMeme = meme
}

function removeElements() {
    gCurrMeme.elements = []
    gNextElementId = 1
    deselectElement()
}

function createMeme(image) {
    gCurrMeme = _createMeme(image)
}

function getCurrMeme() {
    return gCurrMeme
}

function deleteMeme() {
    gCurrMeme = _createMeme()
    deselectElement()
}

function getSelectedElement() {
    return gSelectedElement
}

function selectElement(element) {
    deselectElement()
    element.isSelected = true
    gSelectedElement = element
}

function selectElementByBoundingBox(mouseX, mouseY) {
    const elementToSelect = gCurrMeme.elements.findLast(el => {
        // const { leftX, rightX, topY, bottomY } = el.pos
        // return checkInBox(mouseX, mouseY, leftX, rightX, topY, bottomY)
        const { lines } = el.pos
        log(lines)
        return checkPointInBoundingLines(mouseX, mouseY, ...lines)
    })
    if (elementToSelect) {
        selectElement(elementToSelect)
        gPrevX = mouseX
        gPrevY = mouseY
    } else deselectElement()
    return elementToSelect
}

function selectElementCircleByRadius(mouseX, mouseY) {
    if (! gSelectedElement) return false
    // const circleX = gSelectedElement.pos.rightX
    // const circleY = gSelectedElement.pos.topY
    const [circleX, circleY] = gSelectedElement.pos.points[1]
    const isInCircle = checkInCircle(mouseX, mouseY, circleX, circleY, CIRCLE_RADIUS)
    if (! isInCircle) return false
    gPrevCircleX = mouseX
    gPrevCircleY = mouseY
    gOriginalFontSize = gSelectedElement.fontSize
    return true
}

function checkTransforming() {
    return gOriginalFontSize !== undefined
}

function transformElement(currCircleX, currCircleY) {
    if (! gSelectedElement) return
    const elementX = gSelectedElement.pos.x
    const elementY = gSelectedElement.pos.y
    const prevDist = distance(elementX, elementY, gPrevCircleX, gPrevCircleY)
    const currDist = distance(elementX, elementY, currCircleX, currCircleY)
    const newFontSize = gOriginalFontSize * currDist / prevDist
    gSelectedElement.fontSize = newFontSize
    gSelectedElement.angle = angle(elementX, elementY, currCircleX, currCircleY)
}

function stopTransformingElement() {
    gPrevCircleX = undefined
    gPrevCircleY = undefined
    gOriginalFontSize = undefined
}

function moveElement(currX, currY) {
    if (! gSelectedElement || ! gPrevX || ! gPrevY) return
    const diffX = currX - gPrevX
    const diffY = currY - gPrevY
    const pos = gSelectedElement.pos
    pos.x += diffX
    pos.y += diffY
    pos.leftX += diffX
    pos.rightX += diffX
    pos.topY += diffY
    pos.bottomY += diffY
    gPrevX = currX
    gPrevY = currY
}

function checkMoving() {
    return gPrevX !== undefined
}

function stopMovingElement() {
    gPrevX = undefined
    gPrevY = undefined
}

function addElement(type, text, strokeColor, fillColor) {
    const element = _createElement(type, text, undefined, undefined, strokeColor, fillColor)
    gCurrMeme.elements.push(element)
}

function updateTextLine(lineText) {
    if (gSelectedElement) {
        gSelectedElement.text = lineText
    }
}

function removeElementById(id) {
    const idx = gCurrMeme.elements.findIndex(el => el.id === id)
    if (idx !== -1) {
        const element = gCurrMeme.elements[idx]
        if (element.isSelected) deselectElement()
        gCurrMeme.elements.splice(idx, 1)
    }
}

function selectNextElement() {
    const selectedElementIdx = gCurrMeme.elements.findIndex(el => el.isSelected)
    deselectElement()
    const nextElementIdx = selectedElementIdx + 1
    const nextElement = gCurrMeme.elements[nextElementIdx]
    if (nextElement) {
        nextElement.isSelected = true
        gSelectedElement = nextElement
    }
    return gSelectedElement
}

function deselectElement() {
    if (gSelectedElement) {
        gSelectedElement.isSelected = false
        gSelectedElement = undefined
    }
    stopTransformingElement()
    stopMovingElement()
}

function justifyElement(justifySide) {
    if (gSelectedElement) {
        gSelectedElement.justify = justifySide
    }
}

function alignElement(alignSide) {
    if (gSelectedElement) {
        gSelectedElement.align = alignSide
    }
}

function changeFont(font) {
    if (gSelectedElement) {
        gSelectedElement.font = font
    }
}

function changeFontSize(changeAmount) {
    if (gSelectedElement) {
        gSelectedElement.fontSize += changeAmount
    }
}

function changeStrokeColor(color) {
    if (gSelectedElement) gSelectedElement.strokeColor = color
}

function changeFillColor(color) {
    if (gSelectedElement) gSelectedElement.fillColor = color
}

function _createMeme(image) {
    var imageSrc
    if (image) {
        const url = new URL(image.src)
        imageSrc = url.pathname.slice(1)
    }
    const meme = {
        type: 'meme',
        image,
        imageSrc,
        elements: [],
    }
    return meme
}

function _createElement(type, text, font, fontSize, strokeColor, fillColor, justify, align, angle, pos) {
    if (! text) {
        switch (type) {
            case TYPE_TEXT_LINE:
                text = DEFAULT_LINE_TEXT + gNextElementId
                break
            case TYPE_EMOJI:
                text = DEFAULT_EMOJI
        }
    }
    if (! font) font = DEFAULT_FONT
    if (! fontSize) fontSize = DEFAULT_FONT_SIZE
    if (! strokeColor) strokeColor = DEFAULT_STROKE_COLOR
    if (! fillColor) fillColor = DEFAULT_FILL_COLOR
    if (! justify) justify = JUSTIFY_CENTER
    if (! align) {
        if (type === TYPE_EMOJI) align = ALIGN_CENTER
        else if (gNextElementId === 1) align = ALIGN_TOP
        else if (gNextElementId === 2) align = ALIGN_BOTTOM
        else align = ALIGN_CENTER
    }
    if (! pos) pos = {}
    if (! angle) angle = 0
    const element = {
        id: gNextElementId++,
        type,
        text,
        font,
        fontSize,
        strokeColor,
        fillColor,
        justify,
        align,
        pos,
        angle,
        isSelected: false,
    }
    return element
}