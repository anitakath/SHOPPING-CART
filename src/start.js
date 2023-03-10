
// --------------------------------------------------------------------------------------------- SHOPPING CART


let myBasket = JSON.parse(localStorage.getItem("data")) || [] 


let calculation = () =>{
    let basketIcon = document.getElementById('basketIcon')
    basketIcon.innerHTML=myBasket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // 0 : we want the calculation to start from zero
}

calculation();
// 02:04 youtube



// --------------------------------------------------------------------------------------------- SLIDER 


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
    console.log(slidesHeight)
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




/* GET MOBILE VERSION */

const mobileMenuContainer = document.getElementById('mobileMenuContainer')
const mobileNav = document.getElementById('webNav')
const mobileMain = document.getElementById('mobileMain')

mobileMenuContainer.addEventListener('click', ()=>{
    mobileNav.style.transform = 'translateY(-220px)'
    mobileNav.style.transition = '1s ease-in'
    mobileMain.style.opacity = '0.3'
    mobileMain.style.transition = '1s ease-in'
})

/* GET MOBILE MAIN SLIDER */

const mobileMainSlider = document.getElementById('mobileMainSlider')


const mobileSlides = document.querySelectorAll('.mobileSlides')


const sliderHeight = mobileMainSlider.offsetHeight;
console.log(sliderHeight)
const slidesHeightt = mobileMainSlider.clientHeight;
console.log(slidesHeightt)



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
})*/
