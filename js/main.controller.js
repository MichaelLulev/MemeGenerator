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
    $('main.editor canvas').on('click', onSelectTextLine)
    $('main.editor input.line-text').on('input', onInputLineText)
    $('main.editor button.select-next').on('click', onSelectNextTextLine)
    $('main.editor button.deselect').on('click', onDeselectTextLine)
    $('main.editor button.justify-left').on('click', onJustifyLeft)
    $('main.editor button.justify-center').on('click', onJustifyCenter)
    $('main.editor button.justify-right').on('click', onJustifyRight)
    $('main.editor button.align-top').on('click', onAlignTop)
    $('main.editor button.align-center').on('click', onAlignCenter)
    $('main.editor button.align-bottom').on('click', onAlignBottom)
    $('main.editor button.increase').on('click', onIncreaseFont)
    $('main.editor button.decrease').on('click', onDecreaseFont)
    $('main.editor input.stroke-color').on('change', onChangeStrokeColor)
    $('main.editor input.fill-color').on('change', onChangeFillColor)
    $('main.editor button.remove').on('click', onRemove)
    $('main.editor button.clear').on('click', onClear)
    $('main.editor a[download]').on('click', onDownloadImage)
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

function onSelectTextLine(ev) {
    const mouseX = ev.offsetX
    const mouseY = ev.offsetY
    const selectedTextLine = selectElementByBoundingBox(mouseX, mouseY)
    renderInputColor(selectedTextLine)
    redrawCanvas()
}

function renderInputLineText(selectedTextLine) {
    if (selectedTextLine) {
        $('main.editor input.line-text')
            .val(selectedTextLine.text)
            .focus()
    } else {
        $('main.editor input.line-text')
            .val('')
            .blur()
    }
}

function renderInputColor(selectedTextLine) {
    if (selectedTextLine) {
        $('main.editor input.stroke-color').val(selectedTextLine.strokeColor)
        $('main.editor input.fill-color').val(selectedTextLine.fillColor)
    }
}

function onSubmitText(ev) {
    ev.preventDefault()
    const selectedTextLine = getSelectedElement()
    if (selectedTextLine) deselectElement()
    else onAddTextLine()
    renderInputLineText()
    redrawCanvas()
}

function onInputLineText() {
    const lineText = $('main.editor input.line-text').val()
    updateTextLine(lineText)
    redrawCanvas()
}

function onAddTextLine() {
    const text = $('input.line-text').val()
    const strokeColor = $('input.stroke-color').val()
    const fillColor = $('input.fill-color').val()
    addTextLine(text, strokeColor, fillColor)
    redrawCanvas()
}

function onSelectNextTextLine() {
    const selectedTextLine = selectNextTextLine()
    renderInputs(selectedTextLine)
    redrawCanvas()
}

function renderInputs(selectedElement) {
    renderInputLineText(selectedElement)
    renderInputColor(selectedElement)
}

function onDeselectTextLine() {
    deselectElement()
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

function onAlignTop() {
    alignTextLine(ALIGN_TOP)
    redrawCanvas()
}

function onAlignCenter() {
    alignTextLine(ALIGN_CENTER)
    redrawCanvas()
}

function onAlignBottom() {
    alignTextLine(ALIGN_BOTTOM)
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

function onRemove() {
    const element = getSelectedElement()
    if (element) removeElementById(element.id)
    redrawCanvas()
}

function onClear() {
    renderInputLineText()
    clearMeme()
    clearCanvas()
}

function onChangeStrokeColor(ev) {
    const color = ev.target.value
    changeStrokeColor(color)
    redrawCanvas()
}

function onChangeFillColor(ev) {
    const color = ev.target.value
    changeFillColor(color)
    redrawCanvas()
}

function onToggleAbout() {
    $('div.about').toggleClass('hidden')
}

function onCloseAbout() {
    $('div.about').addClass('hidden')
}

function onDownloadImage(ev) {
    const imgContent = gElCanvas.toDataURL('image/png')
    const elLink = ev.target
    elLink.href = imgContent
}