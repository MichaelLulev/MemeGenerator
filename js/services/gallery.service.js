'use strict'

const gImages = []
const gSearchTagsMap = {
    1: ['dog', 'funny', 'cute', 'laying', 'floor'],
    2: ['man', 'funny', 'angry', 'pointing', 'yelling', 'face'],
    3: ['man', 'angry', 'donald', 'trump', 'cursing', 'pointing', 'suit', 'face'],
    4: ['woman', 'happy', 'oprah', 'winfrey', 'pointing', 'yelling'],
    5: ['man', 'men', 'toys', 'toy', 'story', 'woody', 'buzz', 'happy', 'worried', 'smiling'],
    6: ['man', 'crazy', 'funny', 'hair', 'explaining', 'hands', 'smiling'],
    7: ['man', 'serious', 'glasses', 'morpheus', 'matrix'],
    8: ['man', 'leo', 'leonardo', 'dicaprio', 'smiling', 'hand', 'glass', 'smug', 'suit'],
    9: ['man', 'men', 'kissing', 'funny', 'sport'],
    10: ['man', 'hand', 'explaining', 'serious', 'hair'],
    11: ['baby', 'funny', 'surprised'],
    12: ['man', 'vladimir', 'putin', 'pointing', 'smug', 'suit'],
    13: ['man', 'angry', 'pointing', 'donald', 'trump', 'suit', 'face'],
    14: ['man', 'startrek', 'hand', 'smiling', 'happy', 'bold'],
    15: ['dog', 'dogs', 'cute', 'licking', 'happy', 'puppy', 'puppies', 'small'],
    16: ['baby', 'babies', 'boy', 'kids', 'funny', 'dancing', 'underwear'],
    17: ['cat', 'cute', 'laying', 'keyboard'],
    18: ['man', 'barack', 'obama', 'smiling', 'happy', 'teeth', 'face'],
    19: ['baby', 'dog', 'sleeping', 'cute', 'blanket', 'bed'],
    20: ['man', 'funny', 'pointing', 'glasses'],
    21: ['baby', 'funny', 'serious', 'fist', 'beach'],
    22: ['baby', 'funny', 'laughing', 'evil', 'hands'],
    23: ['man', 'funny', 'dr', 'evil', 'bald', 'fingers', 'quotes', 'face'],
    24: ['man', 'funny', 'willi', 'wonka', 'happy', 'smiling', 'hand'],
    25: ['woman', 'field', 'flowers', 'mountains', 'dancing', 'hands', 'happy'],
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