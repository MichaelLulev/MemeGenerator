'use strict'

var gImages
var gFilteredImgaes
const gSearchTagsMap = {
    1: ['cute', 'dog', 'floor', 'funny', 'laying'],
    2: ['angry', 'face', 'funny', 'man', 'pointing', 'yelling'],
    3: ['angry', 'cursing', 'donald', 'face', 'man', 'pointing', 'suit', 'trump'],
    4: ['happy', 'oprah', 'pointing', 'winfrey', 'woman', 'yelling'],
    5: ['buzz', 'happy', 'man', 'men', 'smiling', 'story', 'toys', 'woody', 'worried'],
    6: ['crazy', 'explaining', 'funny', 'hair', 'hands', 'man', 'smiling'],
    7: ['glasses', 'man', 'matrix', 'morpheus', 'serious'],
    8: ['dicaprio', 'glass', 'hand', 'leonardo', 'man', 'smiling', 'smug', 'suit'],
    9: ['funny', 'kissing', 'man', 'men', 'sport'],
    10: ['explaining', 'hair', 'hand', 'man', 'serious'],
    11: ['baby', 'funny', 'surprised'],
    12: ['man', 'pointing', 'putin', 'smug', 'suit', 'vladimir'],
    13: ['angry', 'donald', 'face', 'man', 'pointing', 'suit', 'trump'],
    14: ['bold', 'hand', 'happy', 'man', 'smiling', 'startrek'],
    15: ['cute', 'dogs', 'happy', 'licking', 'puppies', 'puppy', 'small'],
    16: ['babies', 'baby', 'boy', 'dancing', 'funny', 'kids', 'underwear'],
    17: ['cat', 'cute', 'keyboard', 'laying'],
    18: ['barack', 'face', 'happy', 'man', 'obama', 'smiling', 'teeth'],
    19: ['baby', 'bed', 'blanket', 'cute', 'dog', 'sleeping'],
    20: ['funny', 'glasses', 'man', 'pointing'],
    21: ['baby', 'beach', 'fist', 'funny', 'serious'],
    22: ['baby', 'evil', 'funny', 'hands', 'laughing'],
    23: ['bald', 'dr', 'evil', 'face', 'fingers', 'funny', 'man', 'quotes'],
    24: ['funny', 'hand', 'happy', 'man', 'smiling', 'willi', 'wonka'],
    25: ['dancing', 'field', 'flowers', 'hands', 'happy', 'mountains', 'woman']
}
var gSearchCloud = {}
var gAllTagWords

var gNextImageId

function initImages() {
    gNextImageId = 1
    gImages = _createAllImages()
    gFilteredImgaes = gImages
    gSearchCloud = _createRandomSearchCloud()
}

function getImages() {
    return gFilteredImgaes
}

function getSearchCloud() {
    return gSearchCloud
}

function getAllTagWords() {
    return gAllTagWords
}

function addTagWord(tagWord) {
    if (! gAllTagWords.join().includes(tagWord)) {
        insertToSortedStrings(tagWord, gAllTagWords)
    }
}

function filterImages(strFilter) {
    if (! gSearchCloud[strFilter]) gSearchCloud[strFilter] = 0
    gSearchCloud[strFilter]++
    gFilteredImgaes = gImages.filter(image => image.searchTags.join().includes(strFilter))
}

function _createRandomSearchCloud() {
    const searchCloud = {}
    const duplicateTagWords = []
    for (let tags of Object.values(gSearchTagsMap)) {
        duplicateTagWords.push(...tags)
    }
    gAllTagWords = Array.from(new Set(duplicateTagWords))
    gAllTagWords.sort(compareStrings)
    const randomTagWords = getRandomElements(gAllTagWords, 10)
    randomTagWords.forEach(word => searchCloud[word] = randIntInc(1, 10))
    return searchCloud
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