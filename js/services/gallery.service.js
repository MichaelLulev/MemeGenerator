'use strict'

var gImages
var gFilteredImgaes
const gSearchTagsMap = {
    1: ['dog', 'funny', 'cute', 'laying', 'floor'],
    2: ['man', 'funny', 'angry', 'pointing', 'yelling', 'face'],
    3: ['man', 'angry', 'donald', 'trump', 'cursing', 'pointing', 'suit', 'face'],
    4: ['woman', 'happy', 'oprah', 'winfrey', 'pointing', 'yelling'],
    5: ['man', 'men', 'toys', 'story', 'woody', 'buzz', 'happy', 'worried', 'smiling'],
    6: ['man', 'crazy', 'funny', 'hair', 'explaining', 'hands', 'smiling'],
    7: ['man', 'serious', 'glasses', 'morpheus', 'matrix'],
    8: ['man', 'leonardo', 'dicaprio', 'smiling', 'hand', 'glass', 'smug', 'suit'],
    9: ['man', 'men', 'kissing', 'funny', 'sport'],
    10: ['man', 'hand', 'explaining', 'serious', 'hair'],
    11: ['baby', 'funny', 'surprised'],
    12: ['man', 'vladimir', 'putin', 'pointing', 'smug', 'suit'],
    13: ['man', 'angry', 'pointing', 'donald', 'trump', 'suit', 'face'],
    14: ['man', 'startrek', 'hand', 'smiling', 'happy', 'bold'],
    15: ['dogs', 'cute', 'licking', 'happy', 'puppy', 'puppies', 'small'],
    16: ['baby', 'babies', 'boy', 'kids', 'funny', 'dancing', 'underwear'],
    17: ['cat', 'cute', 'laying', 'keyboard'],
    18: ['man', 'barack', 'obama', 'smiling', 'happy', 'teeth', 'face'],
    19: ['baby', 'dog', 'sleeping', 'cute', 'blanket', 'bed'],
    20: ['man', 'funny', 'pointing', 'glasses'],
    21: ['baby', 'funny', 'serious', 'fist', 'beach'],
    22: ['baby', 'funny', 'laughing', 'evil', 'hands'],
    23: ['man', 'funny', 'dr', 'evil', 'bald', 'fingers', 'quotes', 'face'],
    24: ['man', 'funny', 'willi', 'wonka', 'happy', 'smiling', 'hand'],
    25: ['woman', 'field', 'flowers', 'mountains', 'dancing', 'hands', 'happy']
}
var gNextImageId

function initImages() {
    gNextImageId = 1
    gImages = _createAllImages()
    gFilteredImgaes = gImages
}

function getImages() {
    return gFilteredImgaes
}

function filterImages(strFilter) {
    gFilteredImgaes = gImages.filter(image => image.searchTags.join().includes(strFilter))
}

function _createAllImages() {
    const images = []
    for (var i = 1; i <= 25; i++) {
        const name = `${i}.jpg`
        const src = `img/gallery/${name}`
        const searchTags = gSearchTagsMap[i]
        const image = _createImage(name, src, searchTags)
        images.push(image)
    }
    return images
}

function _createImage(name, src, searchTags) {
    const image = { id: gNextImageId++, name, src, searchTags }
    return image
}