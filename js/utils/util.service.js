'use strict'

function el(selector) {
    var elements
    if (typeof selector === 'string') {
        elements = document.querySelectorAll(selector)
    } else elements = selector
    const wrapedEl = {
        0: elements[0],
        on: (event, handler) => {
            elements.forEach(el => el.addEventListener(event, handler))
            return el(elements)
        },
        html: strHtml => {
            if (strHtml === undefined) return elements.innerHTML
            elements.forEach(el => el.innerHTML = strHtml)
            return el(elements)
        },
        addClass: strClass => {
            elements.forEach(el => el.classList.add(strClass))
            return el(elements)
        },
        removeClass: strClass => {
            elements.forEach(el => el.classList.remove(strClass))
            return el(elements)
        },
        toggleClass: strClass => {
            elements.forEach(el => el.classList.toggle(strClass))
            return el(elements)
        },
        val: value => {
            if (value === undefined) return elements.value
            elements.forEach(el => el.value = value)
            return el(elements)
        },
        blur: () => {
            elements.forEach(el => el.blur())
            return el(elements)
        },
        focus: () => {
            elements.forEach(el => el.focus())
            return el(elements)
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