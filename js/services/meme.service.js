'use strict'

const gMemes = []

function getMemes() {
    return gMemes
}

function _createMeme(image, elements=[]) {
    const meme = {
        image,
        elements,
    }
}

function _createLine(text='Line Text', pos={ x: 0, y: 0 }, selected=false) {
    const line = {
        text,
        pos,
        selected,
    }
    return line
}