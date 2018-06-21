document.body.removeChild(document.body.firstChild)
document.body.removeChild(document.body.firstChild)

var options = {
    profile: {
        img: 'profile.png',
        name: '_brettd'
    }
}
var timeUnits = ['s', 'm', 'h', 'd', 'y']
var searchTerms = 'abcdefghijklmnopqrstuvwxyz'.split('')
var urls = [
    //'http://www.buttercupfestival.com/2-3.htm',
    //'http://www.buttercupfestival.com/2-4.htm',
    //'http://www.buttercupfestival.com/2-5.htm',
    //'http://www.buttercupfestival.com/2-29.htm',
    //'http://www.buttercupfestival.com/2-127.htm',
    //'http://www.buttercupfestival.com/2-129.htm',
    //'http://www.buttercupfestival.com/2-134.htm',
    //'http://www.buttercupfestival.com/2-140.htm',

    'http://chrismckenzie.com',
    'http://iridescentpuddle.com',
    'http://www.fallingfalling.com',
    'http://www.movenowthinklater.com',
    'http://www.electricboogiewoogie.com',
    'http://www.blankwindows.com',
    'https://pixlpa.com/filler/doodle.html',
    'https://pixlpa.com/crust-map',
    'https://pixlpa.com/webgl/hills.html',
    'http://www.earthglance.com/random',

    'https://www.youtube.com/embed/-VQyP-7wMyA',
    'https://www.youtube.com/embed/bjQhthEL-Zo',

    //'http://www.generationlamp.com/lamp.php?lamp=brett',
    //'https://bukk.it/',
    //'http://sometimesredsometimesblue.com/',
    //'https://pbs.twimg.com/media/Cs3ko5QWgAQeDkH.jpg:large',
    //'https://apod.nasa.gov/apod/',
    //'http://www.zentient.com/site/experiments/blox.html',

    'http://brettdoyle.uk/www/lines.html',
    'http://brettdoyle.uk/www/arches.html',

    //'https://codepen.io/brttd/full/xWrMJv/',
    'https://codepen.io/brttd/full/dWNQWo',
    //'https://codepen.io/brttd/full/KNpZYb',
    //'https://codepen.io/brttd/full/vKvxAY',
    //'https://codepen.io/brttd/full/JKwEVL',
    'https://codepen.io/brttd/full/JXmNqd',
    //'https://codepen.io/brttd/full/EKbXXa',

    'https://codepen.io/Jeremboo/full/ENVaMY',
    'https://codepen.io/stefanweck/full/YNPdRR',
    'https://codepen.io/darrylhuffman/full/aBebrK',
    'https://codepen.io/tmrDevelops/full/dOLgWm',
    'https://codepen.io/Mombasa/full/WxVLEJ',
    'https://codepen.io/backoefer/full/grNYYk',
    'https://codepen.io/ImagineProgramming/full/LpOJzM',
    //'https://codepen.io/team/digitalocean/full/grErZV',
    'https://codepen.io/satchmorun/full/jbvbqq',
    'https://codepen.io/satchmorun/full/xbOpeG',
    'https://codepen.io/tmrDevelops/full/KzbPyv',
    'https://codepen.io/timseverien/full/EKdOpy'
]
var images = [
    //'http://brettdoyle.uk/images/wallpapers/Stripes_1.png',
    'http://brettdoyle.uk/images/wallpapers/IsoPixelGrid_1.png',
    //'http://brettdoyle.uk/images/wallpapers/Elevators_1.png',
    'http://brettdoyle.uk/images/wallpapers/DelaunayTriangulationCircumCircle_1.png',
    'http://brettdoyle.uk/images/wallpapers/CubeSpiral_1.png',
    'http://brettdoyle.uk/images/wallpapers/ClothMonochrome_1.png',
    'http://brettdoyle.uk/images/wallpapers/BML_Traffic_2.png',
    'http://brettdoyle.uk/images/wallpapers/BML_Traffic_1.png',
    //'http://brettdoyle.uk/images/wallpapers/BedlamCube_2.png',

    'https://bukk.it/a-moment.gif'
]

var usedURLS = []
var usedImages = []

var urlAttributeText = [
    'From',
    'from:',
    'courtesy of',
    'courtesy of:',
    'by',
    'By:',
    'url:',
    'URL:'
]
var imageAttributeText = [
    'Image is from',
    'Image from',
    'image from:',
    'Image:',
    'From:',
    'url:',
    ''
]
var textBounds = 20
var maxCharsPerLine = 15

var infoText = null

userWidth = 555
userHeight = 987

var activeScreen = 1
var transitionTime = 1

function goFullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
    }
}

function addTextLines(elem, text) {
    let index = 0
    while (index < text.length) {
        elem.appendChild(document.createElement('span'))
        elem.lastChild.textContent = text.slice(index, index + maxCharsPerLine)
        index += maxCharsPerLine
    }

    return elem
}
function getUrlText(url, image = false) {
    let elem = document.createElement('a')
    elem.href = url
    elem.className = 'text'

    elem.style.top =
        (Math.random() * (100 - textBounds * 2) + textBounds).toString() + '%'
    elem.style.left =
        (Math.random() * (100 - textBounds * 2) + textBounds).toString() + '%'

    elem.style.fontSize = (Math.random() * 23 + 12).toString() + 'px'

    elem.style.transform =
        'translate(-50%, -50%) rotate(' +
        (Math.random() * 60 - 30).toString() +
        'deg)'

    elem.className += ' color_' + Math.floor(Math.random() * 8 + 1).toString()
    if (Math.random() > 0.3) {
        elem.className += ' border'
    }

    if (image) {
        elem.appendChild(document.createElement('span'))
        elem.lastChild.textContent =
            imageAttributeText[
                Math.floor(Math.random() * imageAttributeText.length)
            ]
    } else {
        elem.appendChild(document.createElement('span'))
        elem.lastChild.textContent =
            urlAttributeText[
                Math.floor(Math.random() * urlAttributeText.length)
            ]
    }

    addTextLines(elem, url.split('://')[1])

    return elem
}

function getStoryElem() {
    var elem = document.createElement('div')
    elem.className = 'screen'

    if (Math.random() > 0.7) {
        elem.appendChild(document.createElement('img'))
        elem.firstChild.src =
            'https://source.unsplash.com/featured?' +
            searchTerms[Math.floor(Math.random() * searchTerms.length)] +
            ',' +
            searchTerms[Math.floor(Math.random() * searchTerms.length)] +
            ',' +
            searchTerms[Math.floor(Math.random() * searchTerms.length)]

        if (Math.random() > 0.5) {
            elem.appendChild(getUrlText('https://source.unsplash.com', true))
        }
    } else if (Math.random() > 0.7) {
        let imageURL = images[Math.floor(Math.random() * images.length)]

        usedImages.push(imageURL)
        images.splice(images.indexOf(imageURL), 1)

        if (usedImages.length > images.length) {
            images.push(usedImages.shift())
        }

        elem.appendChild(document.createElement('img'))
        elem.firstChild.src = imageURL

        if (Math.random() > 0.7) {
            elem.appendChild(getUrlText(imageURL, true))
        }
    } else {
        let url = urls[Math.floor(Math.random() * urls.length)]

        usedURLS.push(url)
        urls.splice(urls.indexOf(url), 1)

        if (usedURLS.length > urls.length) {
            urls.push(usedURLS.shift())
        }

        elem.appendChild(document.createElement('iframe'))
        elem.firstChild.src = url

        if (url.includes('codepen')) {
            elem.appendChild(document.createElement('div'))
            elem.lastChild.className = 'gradient'
        }

        elem.appendChild(getUrlText(url))
    }
    elem.firstChild.className = 'content'

    let header = document.createElement('div')
    header.className = 'header'

    header.appendChild(document.createElement('div'))
    header.firstChild.className = 'bars'
    let count = Math.floor(Math.random() * 15) + 1

    for (let i = 0; i < count; i++) {
        header.firstChild.appendChild(document.createElement('div'))
        header.firstChild.lastChild.className = 'bar'
    }
    header.firstChild.className = 'bars count_' + count.toString()

    count = Math.floor(Math.random() * count) + 1
    for (let i = count; i < header.firstChild.childElementCount; i++) {
        header.firstChild.children[i].className += ' transparent'
    }

    header.appendChild(document.createElement('a'))
    header.lastChild.className = 'profile'
    header.lastChild.href = 'https://www.instagram.com/' + options.profile.name
    header.lastChild.appendChild(document.createElement('img'))
    header.lastChild.firstChild.src = 'assets/' + options.profile.img
    header.lastChild.appendChild(document.createElement('span'))
    header.lastChild.lastChild.className = 'name'
    header.lastChild.lastChild.textContent = options.profile.name
    header.lastChild.appendChild(document.createElement('span'))
    header.lastChild.lastChild.className = 'time'
    header.lastChild.lastChild.textContent =
        Math.floor(Math.random() * 24).toString() +
        timeUnits[Math.floor(Math.random() * timeUnits.length)]

    elem.appendChild(header)

    let footer = document.createElement('div')
    footer.className = 'footer'

    footer.appendChild(document.createElement('div'))
    footer.firstChild.className = 'link'
    footer.firstChild.appendChild(document.createElement('img'))
    footer.firstChild.firstChild.src = 'assets/arrow.png'
    footer.firstChild.appendChild(document.createElement('span'))
    footer.firstChild.lastChild.textContent = 'See More'

    footer.appendChild(document.createElement('img'))
    footer.lastChild.src = 'assets/send.png'
    footer.lastChild.className = 'send'

    footer.appendChild(document.createElement('img'))
    footer.lastChild.src = 'assets/menu.png'
    footer.lastChild.className = 'menu'

    elem.appendChild(footer)
    elem.style.transition = 'top ' + transitionTime.toString() + 's'

    footer.firstChild.addEventListener('click', showNext)
    footer.lastChild.addEventListener('click', showInfo)
    footer.lastChild.previousElementSibling.addEventListener('click', showInfo)

    return elem
}

function showNext() {
    goFullScreen()

    document.body.firstElementChild.style.zIndex = '1'

    nextStory.style.top = '100%'
    nextStory.style.zIndex = '2'

    requestAnimationFrame(function() {
        document.body.appendChild(nextStory)

        infoText = null

        requestAnimationFrame(function() {
            nextStory.style.top = '0'

            setTimeout(function() {
                document.body.removeChild(document.body.firstElementChild)

                nextStory = getStoryElem()

                //Preload images for next story, without showing the story
                nextStory.style.top = '150%'
                document.body.appendChild(nextStory)
                requestAnimationFrame(function() {
                    document.body.removeChild(nextStory)
                })
            }, transitionTime * 1000)
        })
    })
}
function showInfo() {
    if (infoText) {
        infoText.parentNode.removeChild(infoText)
    }
    infoText = document.createElement('div')
    infoText.className = 'text'

    infoText.style.top = '50%'
    infoText.style.left = '50%'
    infoText.style.fontSize = '35px'

    infoText.style.transform = 'translate(-50%, -50%)'

    infoText.className +=
        ' color_' + Math.floor(Math.random() * 8 + 1).toString()

    infoText.className += ' border'

    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'swipe.brettdoyle.uk'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'is a collection'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'of internet'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'content I like.'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = '-'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'All webpages are'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'linked to.'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'Some images are'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'randomly loaded'
    infoText.appendChild(document.createElement('span'))
    infoText.lastChild.textContent = 'from unsplash.com'

    document.body.firstElementChild.appendChild(infoText)
}

var touchHeight = false
var touchCount = 0
document.body.addEventListener('touchstart', function(touch) {
    if (!touchHeight) {
        touchHeight = touch.touches[0].screenY
    }

    touchCount += 1
})
document.body.addEventListener('touchend', function(touch) {
    if (touch.changedTouches[0].screenY < touchHeight) {
        showNext()
    }

    touchCount -= 1

    if (touchCount === 0) {
        touchHeight = false
    }
})

document.body.appendChild(getStoryElem())
goFullScreen()

var nextStory = getStoryElem()
//Preload second story
nextStory.style.top = '150%'
document.body.appendChild(nextStory)
requestAnimationFrame(function() {
    document.body.removeChild(nextStory)
})
