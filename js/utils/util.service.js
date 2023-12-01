'use strict'

function el(selector) {
    var elements
    if (typeof selector === 'string') {
        elements = document.querySelectorAll(selector)
    } else elements = selector
    const elements0 = elements.length === 1 ? elements[0] : Array.from(elements)
    const wrapedEl = {
        0: elements0,
        on: (event, handler) => {
            elements.forEach(el => el.addEventListener(event, handler))
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
            if (value === undefined) return elements[0].value
            elements.forEach(el => el.value = value)
            return el(elements)
        },
        html: strHtml => {
            if (strHtml === undefined) return elements[0].innerHTML
            elements.forEach(el => el.innerHTML = strHtml)
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

function getRandomElements(elements, num) {
    const elementsCopy = elements.slice()
    const randomElements = []
    while (0 < num-- && 0 < elementsCopy.length) {
        var randomElement = removeRandomElement(elementsCopy)
        randomElements.push(randomElement)
    } 
    return randomElements
}

function removeRandomElement(elements) {
    if (elements.length === 0) return
    const randIdx = randInt(0, elements.length)
    return elements.splice(randIdx, 1)[0]
}

function insertToSortedStrings(newStr, strs) {
    insertToSorted(newStr, strs, compareStrings)
}

function compareStrings(str1, str2) {
    return str1.localeCompare(str2)
}

function insertToSorted(newElement, elements, compareFunc) {
    for (var i = 0; i < elements.length; i++) {
        const currElement = elements[i]
        if (compareFunc(newElement, currElement) <= 0) {
            elements.splice(i, 0, newElement)
            return i
        }
    }
    elements.splice(++i, 0, newElement)
    return i
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