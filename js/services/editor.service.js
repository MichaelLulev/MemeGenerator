'use strict'

const DEFAULT_FONT = 'Arial'
const DEFAULT_FONT_SIZE = 20
const DEFAULT_IMAGE_WIDTH = 400
const DEFAULT_IMAGE_HEIGHT = 400

const TYPE_TEXT_LINE = 'textLine'

var gCurrMeme

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
    if (nextTextLine) nextTextLine.isSelected = true
}

function _createMeme(image) {
    const meme = {
        type: 'meme',
        image,
        width: image ? image.naturalWidth : DEFAULT_IMAGE_WIDTH,
        height: image ? image.naturalHeight : DEFAULT_IMAGE_HEIGHT,
        elements: [],
    }
    return meme
}

function _createTextLine(text, font, fontSize, pos) {
    const numOfTextLines = gCurrMeme.elements.filter(el => el.type === TYPE_TEXT_LINE).length
    if (! text) text = 'Text Line ' + (numOfTextLines + 1)
    if (! font) font = DEFAULT_FONT
    if (! fontSize) fontSize = DEFAULT_FONT_SIZE
    if (! pos) {
        pos = {}
        if (numOfTextLines === 0) pos.y = 0
        else if (numOfTextLines === 1) pos.y = gCurrMeme.height - fontSize
        else pos.y = gCurrMeme.height / 2 - fontSize
        pos.x = 0
    }
    const textLine = {
        type: TYPE_TEXT_LINE,
        text,
        font,
        fontSize,
        pos,
        isSelected: false,
    }
    return textLine
}