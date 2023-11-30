'use strict'

window.onload = onInit

function onInit() {
    initMemes()
    initGallery()
    initCanvas()
    initListeners()
    onShowEditor()
}

function initListeners() {
    $('header nav .editor').on('click', onShowEditor)
    $('header nav .gallery').on('click', onShowGallery)
    $('header nav .about').on('click', onToggleAbout)
    $('main.gallery img').on('click', onSelectImage)
    $('main.editor form').on('submit', onSubmitText)
    $('main.editor input.line-text').on('input', onInputLineText)
    $('main.editor button.select').on('click', onSelectNextTextLine)
    $('main.editor button.deselect').on('click', onDeselectTextLine)
    $('main.editor button.justify-left').on('click', onJustifyLeft)
    $('main.editor button.justify-center').on('click', onJustifyCenter)
    $('main.editor button.justify-right').on('click', onJustifyRight)
    $('main.editor button.increase').on('click', onIncreaseFont)
    $('main.editor button.decrease').on('click', onDecreaseFont)
    $('main.editor button.stroke-color').on('change', onChangeStrokeColor)
    $('main.editor button.fill-color').on('change', onChangeFillColor)
    $('main.editor button.clear').on('click', onClear)
    $('div.about .close').on('click', onCloseAbout)
}

function onShowEditor() {
    $('main.editor').removeClass('hidden')
    $('main.gallery').addClass('hidden')
}

function onShowGallery() {
    $('main.editor').addClass('hidden')
    $('main.gallery').removeClass('hidden')
}

function onSelectImage(ev) {
    createMeme(ev.target)
    redrawCanvas()
    onShowEditor()
}

function onSubmitText(ev) {
    ev.preventDefault()
    const selectedTextLine = getSelectedTextLine()
    if (selectedTextLine) deselectTextLine()
    else onAddTextLine()
    $('main.editor input.line-text').val('').blur()
    redrawCanvas()
}

function onInputLineText() {
    const selectedTextLine = getSelectedTextLine()
    if (selectedTextLine) {
        selectedTextLine.text = $('main.editor input.line-text').val()
        redrawCanvas()
    }
}

function onAddTextLine() {
    const text = $('input.line-text').val()
    const strokeColor = $('input.stroke-color').val()
    const fillColor = $('input.fill-color').val()
    addText(text, strokeColor, fillColor)
    redrawCanvas()
}

function onSelectNextTextLine() {
    const selectedTextLine = selectNextTextLine()
    if (selectedTextLine) {
        $('main.editor input.line-text').val(selectedTextLine.text)
    }
    redrawCanvas()
}

function onDeselectTextLine() {
    deselectTextLine()
    redrawCanvas()
}

function onJustifyLeft() {
    justifyTextLine(JUSTIFY_LEFT)
    redrawCanvas()
}

function onJustifyCenter() {
    justifyTextLine(JUSTIFY_CENTER)
    redrawCanvas()
}

function onJustifyRight() {
    justifyTextLine(JUSTIFY_RIGHT)
    redrawCanvas()
}

function onIncreaseFont() {
    changeFontSize(INCREASE_AMOUNT)
    redrawCanvas()
}

function onDecreaseFont() {
    changeFontSize(DECREASE_AMOUNT)
    redrawCanvas()
}

function onClear() {
    clearMeme()
    clearCanvas()
}

function onChangeStrokeColor(ev) {
    const color = ev.target.value
    changeStrokeColor(color)
}

function onChangeFillColor(ev) {
    const color = ev.target.value
    changeFillColor(color)
}

function onToggleAbout() {
    $('div.about').toggleClass('hidden')
}

function onCloseAbout() {
    $('div.about').addClass('hidden')
}