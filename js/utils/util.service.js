'use strict'

function el(selector) {
    var element
    if (typeof selector === 'string') {
        element = document.querySelector(selector)
    } else element = selector
    const wrapedEl = {
        0: element,
        on: (event, handler) => {
            element.addEventListener(event, handler)
            return el(element)
        },
        html: strHtml => {
            if (! strHtml) return element.innerHTML
            element.innerHTML = strHtml
            return el(selector)
        },
        addClass: strClass => {
            element.classList.add(strClass)
            return el(selector)
        },
        removeClass: strClass => {
            element.classList.remove(strClass)
            return el(selector)
        },
        toggleClass: strClass => {
            element.classList.toggle(strClass)
            return el(selector)
        },
        val: value => {
            if (value === undefined) return element.value
            element.value = value
            return el(selector)
        },
        blur: () => {
            element.blur()
            return el(element)
        },
        focus: () => {
            element.focus()
            return el(element)
        },
    }
    return wrapedEl
}

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