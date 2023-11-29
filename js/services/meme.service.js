'use strict'

const DEFAULT_FONT = 'Arial'
const DEFAULT_FONT_SIZE = 20

const gMemes = []
var gCurrMeme

function initMemes() {
    gCurrMeme = _createMeme()
    log(gCurrMeme)
    gMemes.push(gCurrMeme)
    log(gMemes)
}

function getMemes() {
    return gMemes
}

function getCurrMeme() {
    return gCurrMeme
}

function addLine() {
    const line = _createLine()
    gCurrMeme.elements.push(line)
    log(gCurrMeme)
}

function _createMeme(image, elements=[]) {
    const meme = {
        type: 'meme',
        image,
        elements,
    }
    return meme
}

function _createLine(text='Line Text',
                     font=DEFAULT_FONT,
                     fontSize=DEFAULT_FONT_SIZE,
                     pos={ x: 0, y: 0 },
                     selected=false) {
    const line = {
        type: 'line',
        text,
        font,
        fontSize,
        pos,
        selected,
    }
    return line
}