const slides = document.querySelectorAll('.slide')
const slideLength = slides.length
const icons = document.querySelectorAll('.icon')
let currentSlide = 0

let manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    icons.forEach((icon) => {
        icon.classList.remove('active')
    })
    slides[manual].classList.add('active')
    icons[manual].classList.add('active')
}
icons.forEach((icon, i) => {
    icon.addEventListener('click', () => {
        manualNav(i)
        currentSlide = i;
    })
})

