'use strict'

window.onload = onInit

function onInit() {
    initGallery()
    initEditor()
    initListeners()
    // onShowEditor()
}

function initListeners() {
    el('header nav .editor').on('click', onShowEditor)
    el('header nav .gallery').on('click', onShowGallery)
    el('header nav .about').on('click', onToggleAbout)
    el('main.gallery .search input[type="text"]').on('change', onFilterImages)
    el('main.gallery img').on('click', onSelectImage)
    el('main.editor form').on('submit', onSubmitText)
    el('main.editor canvas').on('click', onSelectWithMouse)
    el('main.editor input.line-text').on('input', onInputLineText)
    el('main.editor button.select-next').on('click', onSelectNextTextLine)
    el('main.editor button.deselect').on('click', onDeselectTextLine)
    el('main.editor button.justify-left').on('click', onJustifyLeft)
    el('main.editor button.justify-center').on('click', onJustifyCenter)
    el('main.editor button.justify-right').on('click', onJustifyRight)
    el('main.editor button.align-top').on('click', onAlignTop)
    el('main.editor button.align-center').on('click', onAlignCenter)
    el('main.editor button.align-bottom').on('click', onAlignBottom)
    el('main.editor button.increase').on('click', onIncreaseFont)
    el('main.editor button.decrease').on('click', onDecreaseFont)
    el('main.editor input.stroke-color').on('change', onChangeStrokeColor)
    el('main.editor input.fill-color').on('change', onChangeFillColor)
    el('main.editor button.remove').on('click', onRemove)
    el('main.editor button.clear').on('click', onClear)
    el('main.editor a[download]').on('click', onDownloadImage)
    el('div.about .close').on('click', onCloseAbout)
}

function onShowEditor() {
    el('main.editor').removeClass('hidden')
    el('main.gallery').addClass('hidden')
}

function onShowGallery() {
    el('main.editor').addClass('hidden')
    el('main.gallery').removeClass('hidden')
}

function onFilterImages(ev) {
    filterImages(ev.target.value)
    renderGallery()
}

function onSelectImage(ev) {
    createMeme(ev.target)
    redrawCanvas()
    onShowEditor()
}

function onSelectWithMouse(ev) {
    const mouseX = ev.offsetX
    const mouseY = ev.offsetY
    const selectedTextLine = selectElementByBoundingBox(mouseX, mouseY)
    renderInputs(selectedTextLine)
    redrawCanvas()
}

function renderInputLineText(selectedTextLine) {
    if (selectedTextLine) {
        el('main.editor input.line-text')
            .val(selectedTextLine.text)
            .focus()
    } else {
        el('main.editor input.line-text')
            .val('')
            .blur()
    }
}

function renderInputColor(selectedTextLine) {
    if (selectedTextLine) {
        el('main.editor input.stroke-color').val(selectedTextLine.strokeColor)
        el('main.editor input.fill-color').val(selectedTextLine.fillColor)
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
    const lineText = el('main.editor input.line-text').val()
    updateTextLine(lineText)
    redrawCanvas()
}

function onAddTextLine() {
    const text = el('input.line-text').val()
    const strokeColor = el('input.stroke-color').val()
    const fillColor = el('input.fill-color').val()
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
    clearCanvas()
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
    el('div.about').toggleClass('hidden')
}

function onCloseAbout() {
    el('div.about').addClass('hidden')
}

function onDownloadImage(ev) {
    const imgContent = gElCanvas.toDataURL('image/png')
    const elLink = ev.target
    elLink.href = imgContent
}