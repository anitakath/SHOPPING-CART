console.log('HOMESUM.JS')


// ----------------------------------------------------------------------------- HOMESUM: LINKS TO HOME SECTIONS

const decorContainer = document.querySelector('.decorContainer')
        const decorItem = document.querySelectorAll('.decorItem')
        const itemTitleContainer = document.querySelectorAll('.itemTitleContainer')
    
        console.log(decorContainer)
        console.log(decorItem)
        console.log(decorItem.length)
        console.log(itemTitleContainer)

      for(let i = 0; i < decorItem.length; i++){
          
        decorItem.forEach((x)=>{
            x.addEventListener('click', ()=>{
                itemTitleContainer.forEach((y)=>{
                    y.style.bottom = '5rem'
                    y.style.transition = '1s ease'
                    y.style.letterSpacing = '4px'
                })
            })
        })

       
    }


    
let myBasket = JSON.parse(localStorage.getItem("data")) || [];


let calculation = () =>{
    let basketIcon = document.getElementById('basketIcon')
    basketIcon.innerHTML=myBasket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // 0 : we want the calculation to start from zero
}

calculation();





const mobileMenuHomeSum= document.getElementById('mobileMenuHomeSum')
const mobileNav = document.getElementById('webNav')
const mobileMain = document.querySelectorAll('.mobileMain')
const main = document.querySelector('main')


mobileMenuHomeSum.addEventListener('click', ()=>{
    if(mobileNav.style.transform === 'translateY(-50px)'){
        mobileNav.style.transform = 'translateY(-800px)'
        mobileNav.style.transition = '1s ease-in-out'
        mobileNav.style.fontSize = '1.5rem'
        main.style.opacity = '1'
        main.style.transition = '1s ease-in'
    } else{
        mobileNav.style.transform = 'translateY(-50px)'
        mobileNav.style.fontSize = '1.5rem'
        mobileNav.style.transition = '1s ease-in-out'
        main.style.opacity = '0.3'
        main.style.transition = '1s ease-in'
       
    }
   
})



