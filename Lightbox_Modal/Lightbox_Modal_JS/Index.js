const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
const e = MouseEvent('click')
const images = document.querySelectorAll('img')
images.forEach(image => {
    images.addEventListener('click', e => {
         lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', (click) => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})