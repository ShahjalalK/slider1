const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const slides = document.querySelectorAll('.slide')
const slidesIcon = document.querySelectorAll('.icon')

const numberOfSlides = slides.length;
var slideNumber = 0;

// Image Slider Next Button
nextBtn.addEventListener('click', slideFunc)
function slideFunc () {
   slides.forEach((slide) => {
      slide.classList.remove('active')
   })
   slidesIcon.forEach((icons) => {
      icons.classList.remove('active')
   })
   slideNumber++
   if(slideNumber > numberOfSlides -1){
      slideNumber = 0;
   }
   slides[slideNumber].classList.add('active')
   slidesIcon[slideNumber].classList.add('active')
}

// Images Slider Prev Button
prevBtn.addEventListener('click', () => {
   slideNumber--
   slides.forEach((slide) => {
      slide.classList.remove('active')
   })
   slidesIcon.forEach((icons) => {
      icons.classList.remove('active')
   })
   if(slideNumber < 0){
      slideNumber = numberOfSlides - 1
   }      
   slides[slideNumber].classList.add('active')
   slidesIcon[slideNumber].classList.add('active')
})

// Slider Infinite
setInterval(slideFunc, 5000)