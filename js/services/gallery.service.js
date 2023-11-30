'use strict'

const gImages = []
const gSearchTagsMap = {
    1: ['dog', 'funny', 'cute'],
    2: ['man', 'funny', 'angry', 'pointing', 'yelling'],
    3: ['man', 'angry', 'donald', 'trump', 'cursing', 'pointing'],
    4: ['woman', 'happy', 'oprah', 'winfrey', 'pointing', 'yelling'],
    5: ['man', 'men', 'toys', 'toy', 'story', 'woody', 'buzz', 'happy', 'worried', 'smiling'],
    6: ['man', 'crazy', 'funny', 'hair', 'explaining', 'hands', 'smiling'],
    7: ['man', 'serious', 'glasses', 'morpheus', 'matrix'],
    8: ['man', 'leo', 'leonardo', 'dicaprio', 'smiling', 'hand', 'glass', 'smug', 'suit'],
    9: ['man', 'men', 'kissing', 'funny', 'sport'],
    10: ['man', 'hand', 'explaining', 'serious', 'hair'],
    11: ['baby', 'funny', 'surprised'],
}

function initImages() {
    for (var i = 1; i <= 25; i++) {
        const name = `${i}.jpg`
        const src = `img/gallery/${name}`
        const image = _createImage(name, src)
        const searchTags = gSearchTagsMap[i]
        gImages.push(image)
    }
}

function _createImage(name, src, searchTags) {
    const image = { name, src, searchTags }
    return image
}