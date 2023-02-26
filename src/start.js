
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
console.log(slidesHeight)

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