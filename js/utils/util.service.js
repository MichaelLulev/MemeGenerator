'use strict'

function checkInBox(x, y, leftX, rightX, topY, bottomY) {
    return leftX <= x && x <= rightX && topY <= y && y <= bottomY
}

function log(...args) {
    args = args.map(arg => JSON.stringify(arg, null, 4))
    console.log(...args)
}

function randIntInc(min, max) {
    return randInt(min, max + 1)
}

function randInt(min, max) {
    return Math.floor(rand(min, max))
}

function rand(min, max) {
    return Math.random() * (max - min) + min
}