let video = document.querySelector('video')
let switchButton = document.querySelector('.switch-button')
let switchRectangle = document.querySelector('.switch-rectangle')

switchButton.addEventListener('click', function() {
    if (!switchRectangle.classList.contains('slide')) {
        switchRectangle.classList.add('slide')
        video.pause()
    }
    else {
        switchRectangle.classList.remove('slide')
        video.play()
    }
})

// preloader
let preloader = document.querySelector('.preloader')
window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
})