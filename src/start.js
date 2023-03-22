

const sliderContainer = document.getElementById('sliderContainer')
const leftSlides = document.getElementById('leftSlides')
const rightSlides = document.getElementById('rightSlides')

const upBtn = document.getElementById('upBtn')
const downBtn = document.getElementById('downBtn')

const slidesLength = rightSlides.querySelectorAll('div').length

const slidesHeight = sliderContainer.clientHeight

let activeSlideIndex = 0;

leftSlides.style.top = `-${(slidesLength -1) * 80}vh`

upBtn.addEventListener('click', ()=> changeSlides('up'))

downBtn.addEventListener('click', ()=> changeSlides('down'))

let changeSlides = (direction) =>{
    if(direction === 'up'){
        activeSlideIndex++
        console.log(activeSlideIndex)
        if(activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){ 
            activeSlideIndex = slidesLength -1
        }
    }

    rightSlides.style.transform = `translateY(-${activeSlideIndex * slidesHeight}px)`
    leftSlides.style.transform= `translateY(${activeSlideIndex * slidesHeight}px)`
    rightSlides.style.transition= '0.5s ease'
    leftSlides.style.transition= '0.5s ease'
}




/* GET MOBILE NAV BAR */

const mobileMenuContainer = document.getElementById('mobileMenuContainer')
const mobileNav = document.getElementById('webNav')
const mobileMain = document.getElementById('mobileMain')


mobileMenuContainer.addEventListener('click', ()=>{
    if(mobileNav.style.transform === 'translateY(-40px)'){
        mobileNav.style.transform = 'translateY(-800px)'
        mobileNav.style.transition = '1s ease-in'
        mobileMain.style.opacity = '0.3'
        mobileMain.style.transition = '1s ease-in'
        mobileNav.style.fontSize = '2rem'
    } else{
        mobileNav.style.transform = 'translateY(-40px)'
        mobileNav.style.transition = '1s ease-in'
        mobileMain.style.opacity = '0.3'
        mobileMain.style.transition = '1s ease-in'
        mobileNav.style.fontSize = '1.5rem'

    }
    
})

/* GET MOBILE MAIN SLIDER */

const mobileMainSlider = document.getElementById('mobileMainSlider')


const mobileSlides = document.querySelectorAll('.mobileSlides')


const sliderHeight = mobileMainSlider.offsetHeight;

const slidesHeightt = mobileMainSlider.clientHeight;




let slider=0;

setInterval(function(){
    /*
  let something = slider * sliderHeight;
  console.log(something) */
    slider++

    if(slider === 0){
        mobileMainSlider.style.transform = `translateY(0px)`

    } else if(slider === 1){
        mobileMainSlider.style.transform = `translateY(-${sliderHeight}px)`
        mobileMainSlider.style.transition = '1s ease'
       
    } else if(slider === 2){
        mobileMainSlider.style.transform = `translateY(-${slider * sliderHeight}px)`
        mobileMainSlider.style.transition = '1s ease'

    } else if(slider === 3){
        mobileMainSlider.style.transform = `translateY(-${slider * sliderHeight}px)`
        mobileMainSlider.style.transition = '1s ease'

    } else if(slider === 4){
        mobileMainSlider.style.transform = `translateY(-${slider * sliderHeight}px)`
        mobileMainSlider.style.transition = '1s ease'

    } else if(slider === 5){
        mobileMainSlider.style.transform = `translateY(0px)`
        mobileMainSlider.style.transition = '1s ease'

    } else if(slider >= 5){
        slider = 0;
        mobileMainSlider.style.transform = `translateY(-${sliderHeight}px)`
    }

    

  /*console.log(slider)*/
}, 4000);




/*
mobileMainSlider.addEventListener('click', ()=>{
    alert('moincito')
})


const mobileMenuNecklaces = document.getElementById('mobileMenuNecklaces')
const mobileNavv = document.getElementById('webNav')
const mobileMainv = document.getElementById('mobileMain')
const main = document.querySelector('main')

mobileMenuNecklaces.addEventListener('click', ()=>{
    if(mobileNavv.style.transform === 'translateY(14vh)'){
        mobileNavv.style.transform = 'translateY(-800px)'
        mobileNavv.style.transition = '1s ease-in'
        main.style.opacity = '1'
        main.style.transition = '1s ease-in'
    } else{
        mobileNavv.style.transform = 'translateY(14vh)'
        mobileNavv.style.transition = '1s ease-in'
        main.style.opacity = '0.3'
        main.style.transition = '1s ease-in'
    } 
    
})


const goUpContainer = document.getElementById('goUpContainer')


goUpContainer.addEventListener('click', ()=>{
   window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });

    console.log(goUpContainer)
})*/

