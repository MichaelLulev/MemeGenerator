'use strict'

const DEFAULT_FONT = 'Impact'
const DEFAULT_FONT_SIZE = 40
const DEFAULT_STROKE_COLOR = '#000000'
const DEFAULT_FILL_COLOR = '#ffffff'
const DEFAULT_LINE_WIDTH = 4

const TYPE_TEXT_LINE = 'textLine'

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
var nextElementId

var prevX
var prevY

function initEditor() {
    nextElementId = 1
    clearMeme()
    initCanvas()
}

function createMeme(image) {
    gCurrMeme = _createMeme(image)
}

function getCurrMeme() {
    return gCurrMeme
}

function clearMeme() {
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

function selectElementByBoundingBox(currX, currY) {
    const elementToSelect = gCurrMeme.elements.find(el => {
        const { leftX, rightX, topY, bottomY } = el.pos
        return checkInBox(currX, currY, leftX, rightX, topY, bottomY)
    })
    if (elementToSelect) {
        selectElement(elementToSelect)
    } else deselectElement()
    prevX = currX
    prevY = currY
    return elementToSelect
}

function moveElement(currX, currY) {
    if (! gSelectedElement || ! prevX || ! prevY) return
    const diffX = currX - prevX
    const diffY = currY - prevY
    const pos = gSelectedElement.pos
    pos.x += diffX
    pos.y += diffY
    pos.leftX += diffX
    pos.rightX += diffX
    pos.topY += diffY
    pos.bottomY += diffY
    prevX = currX
    prevY = currY
}

function stopMovingElement() {
    prevX = undefined
    prevY = undefined
}

function addTextLine(text, strokeColor, fillColor) {
    const textLine = _createTextLine(text, undefined, undefined, strokeColor, fillColor)
    gCurrMeme.elements.push(textLine)
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

function selectNextTextLine() {
    const selectedLineIdx = gCurrMeme.elements.findIndex(el => el.type === TYPE_TEXT_LINE && el.isSelected)
    if (selectedLineIdx !== -1) {
        const selectedLine = gCurrMeme.elements[selectedLineIdx]
        selectedLine.isSelected = false
    }
    const restElements = gCurrMeme.elements.slice(selectedLineIdx + 1)
    const nextTextLine = restElements.find(el => el.type === TYPE_TEXT_LINE)
    if (nextTextLine) {
        nextTextLine.isSelected = true
        gSelectedElement = nextTextLine
    } else gSelectedElement = undefined
    return gSelectedElement
}

function deselectElement() {
    if (gSelectedElement) {
        gSelectedElement.isSelected = false
        gSelectedElement = undefined
    }
}

function justifyTextLine(justifySide) {
    if (gSelectedElement) {
        gSelectedElement.pos.x = undefined
        gSelectedElement.justify = justifySide
    }
}

function alignTextLine(alignSide) {
    if (gSelectedElement) {
        gSelectedElement.pos.y = undefined
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
    const meme = {
        type: 'meme',
        image,
        elements: [],
    }
    return meme
}

function _createTextLine(text, font, fontSize, strokeColor, fillColor, justify, align, pos) {
    if (! text) text = 'Text Line ' + nextElementId
    if (! font) font = DEFAULT_FONT
    if (! fontSize) fontSize = DEFAULT_FONT_SIZE
    if (! strokeColor) strokeColor = DEFAULT_STROKE_COLOR
    if (! fillColor) fillColor = DEFAULT_FILL_COLOR
    if (! justify) justify = JUSTIFY_CENTER
    if (! align) {
        if (nextElementId === 1) align = ALIGN_TOP
        else if (nextElementId === 2) align = ALIGN_BOTTOM
        else align = ALIGN_CENTER
    }
    if (! pos) pos = {}
    const textLine = {
        type: TYPE_TEXT_LINE,
        id: nextElementId++,
        text,
        font,
        fontSize,
        strokeColor,
        fillColor,
        justify,
        align,
        pos,
        isSelected: false,
    }
    return textLine
}