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
var gSelectedTextLine

function initMemes() {
    clearMeme()
}

function createMeme(image) {
    gCurrMeme = _createMeme(image)
}

function getCurrMeme() {
    return gCurrMeme
}

function clearMeme() {
    gCurrMeme = _createMeme()
    deselectTextLine()
}

function getSelectedTextLine() {
    return gSelectedTextLine
}

function selectTextLine(textLine) {
    deselectTextLine()
    textLine.isSelected = true
    gSelectedTextLine = textLine
}

function selectElementByBoundingBox(x, y) {
    const elementToSelect = gCurrMeme.elements.find(el => {
        const { leftX, rightX, topY, bottomY } = el.pos
        return checkInBox(x, y, leftX, rightX, topY, bottomY)
    })
    if (elementToSelect) {
        selectTextLine(elementToSelect)
    } else deselectTextLine()
    return elementToSelect
}

function addText(text, strokeColor, fillColor) {
    const textLine = _createTextLine(text, undefined, undefined, strokeColor, fillColor)
    gCurrMeme.elements.push(textLine)
}

function updateTextLine(lineText) {
    if (gSelectedTextLine) {
        gSelectedTextLine.pos = {}
        gSelectedTextLine.text = lineText
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
        gSelectedTextLine = nextTextLine
    } else gSelectedTextLine = undefined
    return gSelectedTextLine
}

function deselectTextLine() {
    if (gSelectedTextLine) {
        gSelectedTextLine.isSelected = false
        gSelectedTextLine = undefined
    }
}

function justifyTextLine(justifySide) {
    if (gSelectedTextLine) {
        gSelectedTextLine.pos = {}
        gSelectedTextLine.justify = justifySide
    }
}

function alignTextLine(alignSide) {
    if (gSelectedTextLine) {
        gSelectedTextLine.pos = {}
        gSelectedTextLine.align = alignSide
    }
}

function changeFontSize(changeAmount) {
    if (gSelectedTextLine) {
        gSelectedTextLine.pos = {}
        gSelectedTextLine.fontSize += changeAmount
    }
}

function changeStrokeColor(color) {
    if (gSelectedTextLine) gSelectedTextLine.strokeColor = color
}

function changeFillColor(color) {
    if (gSelectedTextLine) gSelectedTextLine.fillColor = color
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