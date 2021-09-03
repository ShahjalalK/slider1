const icons = document.querySelectorAll('.icon')
const slides = document.querySelectorAll('.slide')
let slideIndex = 1

let slidesA = (i) => {    
    slides.forEach((slide) => {
        slide.classList.remove('active')        
    })     
    icons.forEach((icon) => {
        icon.classList.remove('active')
    })   
    slides[i].classList.add('active')
    icons[i].classList.add('active')
}
icons.forEach((icon, i) => {
    icon.addEventListener('click', () => {
        slidesA(i)
        slideIndex = i 
    })
})

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active')
    let i = 1
    var repeater = () => {
        setTimeout(() => {
            [...active].forEach((active) => {
                active.classList.remove('active')
            })
            slides[i].classList.add('active')
            icons[i].classList.add('active')
            i++
            if(slides.length == i){
                i = 0
            }
            if(i >= slides.length){
                return
            }
            repeater();
        }, 5000)
    }
    repeater();
    
}
repeat()
