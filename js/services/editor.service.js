'use strict'

const DEFAULT_FONT = 'Arial'
const DEFAULT_FONT_SIZE = 20
const DEFAULT_IMAGE_WIDTH = 400
const DEFAULT_IMAGE_HEIGHT = 400

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

function addLine() {
    const line = _createLine()
    gCurrMeme.elements.push(line)
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

function _createLine(text, font, fontSize, pos) {
    const numOfLines = gCurrMeme.elements.filter(el => el.type === 'line').length
    if (! text) text = 'Line Text ' + (numOfLines + 1)
    if (! font) font = DEFAULT_FONT
    if (! fontSize) fontSize = DEFAULT_FONT_SIZE
    if (! pos) {
        pos = {}
        if (numOfLines === 0) pos.y = 0
        else if (numOfLines === 1) pos.y = gCurrMeme.height - fontSize
        else pos.y = gCurrMeme.height / 2 - fontSize
        pos.x = 0
    }
    const line = {
        type: 'line',
        text,
        font,
        fontSize,
        pos,
        selected: false,
    }
    return line
}