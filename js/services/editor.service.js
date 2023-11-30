'use strict'

const DEFAULT_FONT = 'Impact'
const DEFAULT_FONT_SIZE = 40
const DEFAULT_STROKE_COLOR = 'black'
const DEFAULT_FILL_COLOR = 'white'
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

function initEditor() {
    gCurrMeme = _createMeme()
    gSelectedElement = undefined
    nextElementId = 1
    initCanvas()
}

function createMeme(image) {
    gCurrMeme = _createMeme(image)
}

function getCurrMeme() {
    return gCurrMeme
}

function clearCanvas() {
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

function selectElementByBoundingBox(x, y) {
    const elementToSelect = gCurrMeme.elements.find(el => {
        const { leftX, rightX, topY, bottomY } = el.pos
        return checkInBox(x, y, leftX, rightX, topY, bottomY)
    })
    if (elementToSelect) {
        selectElement(elementToSelect)
    } else deselectElement()
    return elementToSelect
}

function addTextLine(text, strokeColor, fillColor) {
    const textLine = _createTextLine(text, undefined, undefined, strokeColor, fillColor)
    gCurrMeme.elements.push(textLine)
}

function updateTextLine(lineText) {
    if (gSelectedElement) {
        gSelectedElement.pos = {}
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
        gSelectedElement.pos = {}
        gSelectedElement.justify = justifySide
    }
}

function alignTextLine(alignSide) {
    if (gSelectedElement) {
        gSelectedElement.pos = {}
        gSelectedElement.align = alignSide
    }
}

function changeFontSize(changeAmount) {
    if (gSelectedElement) {
        gSelectedElement.pos = {}
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
    const numOfTextLines = gCurrMeme.elements.filter(el => el.type === TYPE_TEXT_LINE).length
    if (! text) text = 'Text Line ' + (numOfTextLines + 1)
    if (! font) font = DEFAULT_FONT
    if (! fontSize) fontSize = DEFAULT_FONT_SIZE
    if (! strokeColor) strokeColor = DEFAULT_STROKE_COLOR
    if (! fillColor) fillColor = DEFAULT_FILL_COLOR
    if (! justify) justify = JUSTIFY_CENTER
    if (! align) {
        if (numOfTextLines === 0) align = ALIGN_TOP
        else if (numOfTextLines === 1) align = ALIGN_BOTTOM
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