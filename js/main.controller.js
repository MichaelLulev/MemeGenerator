'use strict'

window.onload = onInit

function onInit() {
    initGallery()
    initEditor()
    initMemes()
    initControls()
    initListeners()
}

function initListeners() {
    el('header nav .editor').on('mousedown', onShowEditor)
    el('header nav .memes').on('mousedown', onShowMemes)
    el('header nav .gallery').on('mousedown', onShowGallery)
    el('header nav .about').on('mousedown', onToggleAbout)
    el('header .hamburger-menu').on('mousedown', onOpenHamburgerMenu)
    el('.main-memes img').on('click', onSelectMeme)
    el('.main-gallery .search input[type="text"]').on('change', onFilterImages)
    el('.main-gallery .search-cloud .tag').on('click', onFilterImageByTag)
    el('.main-gallery img').on('click', onSelectImage)
    el('.main-editor form.text-line *').on('focus', onFocusTextLine)
    el('.main-editor form.text-line').on('submit', onSubmitText)
    el('.main-editor input.line-text').on('input', onInputLineText)
    el('.main-editor form.emoji *').on('focus', onFocusEmojiSearch)
    el('.main-editor form.emoji').on('submit', onSubmitEmoji)
    el('body').on('mousedown', onDeselectWithMouse)
    el('.main-editor .controls .control-row').on('mousedown', ev => ev.stopPropagation())
    el('.main-editor canvas').on('mousedown', onSelectWithMouse)
    el('.main-editor canvas').on('mousemove', onMoveWithMouse)
    el('.main-editor canvas').on('mouseup', onStopMovingWithMouse)
    el('.main-editor canvas').on('mouseout', onStopMovingWithMouse)
    el('body').on('click', onClickWithMouse)
    el('.main-editor .controls .control-row').on('click', ev => ev.stopPropagation())
    el('.main-editor button.select-next').on('click', onSelectNextElement)
    el('.main-editor button.deselect').on('click', onDeselectElement)
    el('.main-editor button.justify-left').on('click', onJustifyLeft)
    el('.main-editor button.justify-center').on('click', onJustifyCenter)
    el('.main-editor button.justify-right').on('click', onJustifyRight)
    el('.main-editor button.align-top').on('click', onAlignTop)
    el('.main-editor button.align-center').on('click', onAlignCenter)
    el('.main-editor button.align-bottom').on('click', onAlignBottom)
    el('.main-editor select.font').on('change', onChangeFont)
    el('.main-editor button.increase').on('click', onIncreaseFont)
    el('.main-editor button.decrease').on('click', onDecreaseFont)
    el('.main-editor input.stroke-color').on('input', onChangeStrokeColor)
    el('.main-editor input.fill-color').on('input', onChangeFillColor)
    el('.main-editor button.remove').on('click', onRemove)
    el('.main-editor button.clear').on('click', onClear)
    el('.main-editor button.new-meme').on('click', onNewMeme)
    el('.main-editor button.save').on('click', onSaveMeme)
    el('.main-editor a[download]').on('click', onDownloadImage)
    el('.main-about .close').on('click', onCloseAbout)
}

function onOpenHamburgerMenu() {
    el('header nav ul').toggleClass('open')
    el('header .hamburger-menu').toggleClass('open')
}

function onShowEditor() {
    el('.main-editor').removeClass('hidden')
    el('.main-memes').addClass('hidden')
    el('.main-gallery').addClass('hidden')
    el('header nav ul').removeClass('open')
    el('header .hamburger-menu').removeClass('open')
}

function onShowMemes() {
    el('.main-editor').addClass('hidden')
    el('.main-memes').removeClass('hidden')
    el('.main-gallery').addClass('hidden')
    el('header nav ul').removeClass('open')
    el('header .hamburger-menu').removeClass('open')
}

function onShowGallery() {
    el('.main-editor').addClass('hidden')
    el('.main-memes').addClass('hidden')
    el('.main-gallery').removeClass('hidden')
    el('header nav ul').removeClass('open')
    el('header .hamburger-menu').removeClass('open')
}

function onFilterImages(ev) {
    const tagWord = ev.target.value.toLowerCase()
    filterImages(tagWord)
    addTagWord(tagWord)
    renderSearhCloud()
    el('.main-gallery .search-cloud .tag').on('click', onFilterImageByTag)
    renderSearchDatalist()
    renderGallery()
    el('.main-gallery img').on('click', onSelectImage)
}

function onFilterImageByTag(ev) {
    const elInput = el('.main-gallery .search input[type="text"]')
        .val(ev.target.innerText)[0]
    elInput.dispatchEvent(new Event('change'))
    el('.main-gallery .search-cloud .tag').on('click', onFilterImageByTag)
}

function onSelectMeme(ev) {
    const previewImage = ev.target
    const myMemes = loadMemes()
    const memeIdx = previewImage.dataset.idx
    const meme = myMemes[memeIdx]
    meme.image = new Image()
    meme.image.src = meme.imageSrc
    meme.image.onload = () => {
        initEditor()
        setCurrMeme(meme)
        redrawCanvas()
        onShowEditor()
    }
}

function onSelectImage(ev) {
    initEditor()
    createMeme(ev.target)
    redrawCanvas()
    onShowEditor()
}

function onDeselectWithMouse() {
    deselectElement()
    renderInputs()
    redrawCanvas()
}

function onSelectWithMouse(ev) {
    ev.stopPropagation()
    const mouseX = ev.offsetX
    const mouseY = ev.offsetY
    const isCircleSelected = selectElementCircleByRadius(mouseX, mouseY)
    if (! isCircleSelected) {
        const selectedElement = selectElementByBoundingBox(mouseX, mouseY)
        renderInputs(selectedElement)
        redrawCanvas()
    }
}

function onMoveWithMouse(ev) {
    const isTransforming = checkTransforming()
    const isMoving = checkMoving()
    if (! isTransforming && ! isMoving) return
    const mouseX = ev.offsetX
    const mouseY = ev.offsetY
    if (isTransforming) {
        transformElement(mouseX, mouseY)
    } else {
        moveElement(mouseX, mouseY)
    }
    redrawCanvas()
}

function onStopMovingWithMouse() {
    stopTransformingElement()
    stopMovingElement()
}

function onClickWithMouse() {
    const selectElement = getSelectedElement()
    renderInputs(selectElement)
}

function renderInputLineText(selectedTextLine) {
    if (selectedTextLine) {
        el('.main-editor input.line-text')
            .val(selectedTextLine.text)
            .focus()
    } else {
        el('.main-editor input.line-text')
            .val('')
            .blur()
    }
}

function renderInputEmojiSearch(selectedEmoji) {
    if (selectedEmoji) {
        el('.main-editor input.emoji-search')
            .val(selectedEmoji.text)
            .focus()
    } else {
        el('.main-editor input.emoji-search')
            .val('')
            .blur()
    }
}

function renderInputColor(selectedTextLine) {
    if (selectedTextLine) {
        el('.main-editor input.stroke-color').val(selectedTextLine.strokeColor)
        el('.main-editor input.fill-color').val(selectedTextLine.fillColor)
    }
}

function renderInputFont(selectedTextLine) {
    if (selectedTextLine) {
        el('.main-editor select.font').val(selectedTextLine.font)
    }
}

function onFocusTextLine() {
    const selectedElement = getSelectedElement()
    if (selectedElement && selectedElement.type === TYPE_EMOJI) {
        deselectElement()
    }
}

function onSubmitText(ev) {
    ev.preventDefault()
    const selectedElement = getSelectedElement()
    if (selectedElement) deselectElement()
    else onAddTextLine()
    renderInputLineText()
    redrawCanvas()
}

function onFocusEmojiSearch() {
    deselectElement()
}

function onSubmitEmoji(ev) {
    ev.preventDefault()
    const selectedElement = getSelectedElement()
    if (selectedElement) deselectElement()
    else onAddEmoji()
    // renderInputEmojiSearch()
    redrawCanvas()
}

function onInputLineText() {
    const lineText = el('.main-editor input.line-text').val()
    updateTextLine(lineText)
    redrawCanvas()
}

function onAddTextLine() {
    const text = el('input.line-text').val()
    const strokeColor = el('input.stroke-color').val()
    const fillColor = el('input.fill-color').val()
    addElement(TYPE_TEXT_LINE, text, strokeColor, fillColor)
}

function onAddEmoji() {
    const emoji = el('input.emoji-search').val()
    addElement(TYPE_EMOJI, emoji)
}

function onSelectNextElement() {
    const selectedElement = selectNextElement()
    renderInputs(selectedElement)
    redrawCanvas()
}

function renderInputs(selectedElement) {
    if (! selectedElement) {
        renderInputLineText()
        renderInputFont()
        renderInputColor()
        renderInputEmojiSearch()
        return
    }
    switch (selectedElement.type) {
        case TYPE_TEXT_LINE:
            renderInputLineText(selectedElement)
            renderInputFont(selectedElement)
            renderInputColor(selectedElement)
            break
        case TYPE_EMOJI:
            // renderInputEmojiSearch(selectedElement)
    }
}

function onDeselectElement() {
    deselectElement()
    redrawCanvas()
}

function onJustifyLeft() {
    justifyElement(JUSTIFY_LEFT)
    redrawCanvas()
}

function onJustifyCenter() {
    justifyElement(JUSTIFY_CENTER)
    redrawCanvas()
}

function onJustifyRight() {
    justifyElement(JUSTIFY_RIGHT)
    redrawCanvas()
}

function onAlignTop() {
    alignElement(ALIGN_TOP)
    redrawCanvas()
}

function onAlignCenter() {
    alignElement(ALIGN_CENTER)
    redrawCanvas()
}

function onAlignBottom() {
    alignElement(ALIGN_BOTTOM)
    redrawCanvas()
}

function onChangeFont(ev) {
    const font = ev.target.value
    changeFont(font)
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
    renderInputs()
    redrawCanvas()
}

function onClear() {
    renderInputs()
    removeElements()
    redrawCanvas()
}

function onNewMeme() {
    renderInputs()
    initEditor()
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
    // el('.main-about').toggleClass('transparent')
    el('.main-about').toggleClass('hidden')
}

function onCloseAbout() {
    // el('.main-about').addClass('transparent')
    el('.main-about').addClass('hidden')
}

function onSaveMeme() {
    saveMeme()
    initMemes()
    el('.main-memes img').on('click', onSelectMeme)
}

function onDownloadImage(ev) {
    const imgContent = gElCanvas.toDataURL('image/png')
    const elLink = ev.target
    elLink.href = imgContent
}