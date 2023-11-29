'use strict'

const DEFAULT_FONT = 'Arial'
const DEFAULT_FONT_SIZE = 20

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
}

function addText() {
    const textLine = _createTextLine()
    gCurrMeme.elements.push(textLine)
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
}

function justifyTextLine(justifySide) {
    if (gSelectedTextLine) gSelectedTextLine.justify = justifySide
}

function changeFontSize(changeAmount) {
    if (gSelectedTextLine) gSelectedTextLine.fontSize += changeAmount
}

function _createMeme(image) {
    const meme = {
        type: 'meme',
        image,
        elements: [],
    }
    return meme
}

function _createTextLine(text, font, fontSize, justify, align) {
    const numOfTextLines = gCurrMeme.elements.filter(el => el.type === TYPE_TEXT_LINE).length
    if (! text) text = 'Text Line'
    if (! font) font = DEFAULT_FONT
    if (! fontSize) fontSize = DEFAULT_FONT_SIZE
    if (! justify) justify = JUSTIFY_CENTER
    if (! align) {
        if (numOfTextLines === 0) align = ALIGN_TOP
        else if (numOfTextLines === 1) align = ALIGN_BOTTOM
        else align = ALIGN_CENTER
    }
    const textLine = {
        type: TYPE_TEXT_LINE,
        text,
        font,
        fontSize,
        justify,
        align,
        isSelected: false,
    }
    return textLine
}