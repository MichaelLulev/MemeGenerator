'use strict'

function initControls() {
    renderEmojisSearch()
}

function renderEmojisSearch() {
    const strHtml = Object.entries(emojis).reduce((strHtml, [name, emoji]) => {
        emoji = emoji.trim()
        return strHtml + `
            <option value="${emoji}">${name}</option>`
    }, '')
    el('#emojis').html(strHtml)
}