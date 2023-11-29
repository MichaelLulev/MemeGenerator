'use strict'

const gMemes = []
var gCurrMeme = _createMeme()

gMemes.push(gCurrMeme)
log(gMemes)

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
        image,
        elements,
    }
    return meme
}

function _createLine(text='Line Text', pos={ x: 0, y: 0 }, selected=false) {
    const line = {
        text,
        pos,
        selected,
    }
    return line
}