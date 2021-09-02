const prevIcon = document.querySelector('.prev-icon')
const nextIcon = document.querySelector('.next-icon')
const slides = document.querySelectorAll('.slide')
const slideIcon = document.querySelectorAll('.icon')
const slideLength = slides.length
let i = 0

nextIcon.addEventListener('click', nextSlider)
setInterval(nextSlider, 5000)

function nextSlider(){
   slides.forEach((slide) => {
      slide.classList.remove('active')
   })
   slideIcon.forEach((icon) => {
      icon.classList.remove('active')     
   })
   i++
   if(i > slideLength - 1){
      i = 0
   }  
   slides[i].classList.add('active')
   slideIcon[i].classList.add('active')
}

prevIcon.addEventListener('click', prevSlider)

function prevSlider(){ 
   i-- 
   slides.forEach((slide) => {
      slide.classList.remove('active')
   })
   slideIcon.forEach((icon) => {
      icon.classList.remove('active')
   })
   
   if(i < 0){
      i = slideLength - 1
   } 
  slides[i].classList.add('active')
  slideIcon[i].classList.add('active')
}




