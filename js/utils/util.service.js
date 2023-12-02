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

function checkInCircle(x, y, circleX, circleY, circleRadius) {
    return distance(x, y, circleX, circleY) <= circleRadius
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

function checkPointInBoundingLines(x1, y1, line1, line2, line3, line4) {
    const isBetweenLine1Line2 = checkPointBetweenLines(x1, y1, line1, line2)
    const isBetweenLine3Line4 = checkPointBetweenLines(x1, y1, line3, line4)
    return isBetweenLine1Line2 && isBetweenLine3Line4
}

function checkPointBetweenLines(x1, y1, line1, line2) {
    const distance1 = distancePointToLine(x1, y1, line1)
    const distance2 = distancePointToLine(x1, y1, line2)
    const distanceLines = distanceParallelLines(line1, line2)
    return Math.max(distance1, distance2) <= distanceLines
}

function distanceParallelLines([a1, b1, c1], [a2, b2, c2]) {
    return Math.abs(c1 - c2) / Math.sqrt(a1**2 + b1**2) 
}

function distancePointToLine(x1, y1, [a, b, c]) {
    return Math.abs(a*x1 + b*y1 + c) / Math.sqrt(a**2 + b**2)
}

// The parameters a, b, c in the equation a*x + b*y + c = 0 of a line
// Between two points (x1, y1) and (x2, y2)
// y = m*x + n
// m = tan(angle(x1, y1, x2, y2))
// y1 - m*x1 = n
// y1 - tan(angle(x1, y1, x2, y2))*x1 = n
// y = tan(angle(x1, y1, x2, y2))*x + y1 - tan(angle(x1, y1, x2, y2))*x1
// y - tan(angle(x1, y1, x2, y2))*x - (y1 - tan(angle(x1, y1, x2, y2))*x1) = 0
// - tan(angle(x1, y1, x2, y2))*x + y - y1 + tan(angle(x1, y1, x2, y2))*x1 = 0
// a*x + b*y + c = 0
// a = -tan(angle(x1, y1, x2, y2))
// b = 1
// c = -y1 + tan(angle(x1, y1, x2, y2))*x1
// if (x1 === x2)
// x = x1
// 1*x + 0*y - x1 = 0
function lineParams(x1, y1, x2, y2) {
    var a, b, c
    if (x1 !== x2) {
        a = -Math.tan(angle(x1, y1, x2, y2))
        b = 1
        c = -y1 + Math.tan(angle(x1, y1, x2, y2))*x1
    } else {
        a = 1
        b = 0
        c = -x1
    }
    return [a, b, c]
}

// a*x + b*y + c = 0
// b*y = -a*x - c
// y = -a/b*x - x
// m = -a/b
// m = tan(angle1)
// tan(angle1) = -a/b
// angle1 = atan(tan(angle1))
// angle1 = atan(-a/b)
// angle1 + angle2 = atan(-a/b) + angle2
// newM = tan(angle1 + angle2)
// newM = tan(atan(-a/b) + angle2)
// y = m*x + n
// y1 - m*x1 = n
// y = m*x + (y1 - m*x1)
// -m*x + 1*y - (y1 - m*x1) = 0
// -m*x + 1*y - y1 + m*x1 = 0
// a*x + b*y + c = 0
// a = -m
// b = 1
// c = -y1 + m*x1
// if (|newM| !== Infinity)
// newA = newM
// newB = 1
// newC = -y1 + newM*x1
// else
// x = x1
// 1*x + 0*y -x1 = 0
// newA = 1
// newB = 0
// newC = -x1
function rotateLineAroundPoint([a, b, c], x1, y1, angle) {
    var newA, newB, newC
    const newM = Math.tan(Math.atan(-a/b)) + angle
    if (Math.abs(newM) !== Infinity) {
        newA = newM
        newB = 1
        newC = -y1 + newM*x1
    } else {
        newA = 1
        newB = 0
        newC = -x1
    }
    return [newA, newB, newC]
}

function angle(x1, y1, x2, y2) {
    const angle = Math.atan((y1 - y2) / (x1 - x2))
    const addon = (x1 <= x2) ? 0 : -Math.PI
    return angle + addon
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