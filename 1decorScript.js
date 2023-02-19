
/* ------------------------------- NAV BAR SCROLL TO ELEMENT ------------------------------- */

const goUp = document.getElementById('goUp')

goUp.addEventListener('click', () =>
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
  
}));

const vases = document.getElementById('vases')
const toVases = document.querySelector('.vases')

vases.addEventListener('click', ()=>{
    window.scrollTo({
        top: '180',
        behavior: 'smooth'
    })
})

const carpets = document.getElementById('carpets')

carpets.addEventListener('click', ()=>{
    window.scrollTo({
        top: '2345',
        behavior: 'smooth'
    })
})

const lamps = document.getElementById('lamps')

lamps.addEventListener('click', ()=>{
    window.scrollTo({
        top: '3485',
        behavior: 'smooth'
    })
})

/* ------------------------------- DATA AND SHOP GRID -------------------------------*/

const decorContainer = document.getElementById('decorContainer')
// const item = document.querySelectorAll('.item')
// const cartItems = document.getElementById('cartItems')


let vasesData = [{
    id: "vaseGoldy",
    name: "VASE 'GOLDY'",
    price: "29,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase0.jpg"
}, {
    id: "vaseBunny",
    name: "VASE 'BUNNY'",
    price: "49,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase1.jpg"
}, {
    id: "vaseLeo",
    name: "VASE 'LEO'",
    price: "49,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase2.jpg"
}, {
    id: "vaseRiffles",
    name: "VASE 'RIFFLES'",
    price: "69,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase3.jpg"
}, {
    id: "vaseBrownie",
    name: "VASE 'BROWNIE'",
    price: "49,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase4.jpg"
}, {
    id: "vaseLavender",
    name: "VASE 'LAVENDER'",
    price: "39,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase5.jpg"
}, {
    id: "vaseRosie",
    name: "VASE 'ROSIE'",
    price: "39,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase6.jpg"
}, {
    id: "vaseBlubb",
    name: "VASE 'BLUBB'",
    price: "29,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase7.jpg"
}, {
    id: "vasePinky",
    name: "VASE 'PINKY'",
    price: "79,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase8.jpg"
}, {
    id: "vaseRose",
    name: "VASE 'ROSÉ'",
    price: "49,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase9.jpg"
}, {
    id: "vaseSoap",
    name: "VASE 'SOAP'",
    price: "39,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase10.jpg"
}, {
    id: "vaseDreamy",
    name: "NECKLACE 'DREAMY'",
    price: "39,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase11.jpg"
}, {
    id: "vaseModern",
    name: "VASE 'MODERN'",
    price: "79,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase12.jpg"
}, {
    id: "vaseElegance",
    name: "VASE 'ELEGANCE'",
    price: "49,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase13.jpg"
}, {
    id: "vaseCircle",
    name: "VASE 'CIRCLE'",
    price: "79,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase14.jpg"
}, {
    id: "vaseModernII",
    name: "VASE 'MODERN II'",
    price: "39,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/vase15.jpg"
}
]


 let carpetData = [{
    id: "carpetJuly",
    name: "CARPET 'JULY'",
    price: "129,99",
    desc: "a simple elegant necklace for ",
    img: "livingimages/carpet0.jpg"
}, {
    id: "carpetMia",
    name: "CARPET 'MIA'",
    price: "129,99",
    desc: "a simple elegant necklace for ",
    img: "livingimages/carpet1.jpg"
}, {
    id: "carpetMaya",
    name: "CARPET 'MAYA'",
    price: "119,99",
    desc: "a simple elegant necklace for ",
    img: "livingimages/carpet2.jpg"
}, {
    id: "carpetFrida",
    name: "CARPET 'FRIDA'",
    price: "229,99",
    desc: "a simple elegant necklace for ",
    img: "livingimages/carpet3.jpg"
}, {
    id: "carpetLinda",
    name: "CARPET 'SOPHIE'",
    price: "329,99",
    desc: "a simple elegant necklace for ",
    img: "livingimages/carpet4.jpg"
},
]


let lampsData =[{
    id: "lampLola",
    name: "LAMP 'LOLA'",
    price: "99,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/lamp0.jpg"
}, {
    id: "lampAmy",
    name: "LAMP 'AMY'",
    price: "129,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/lamp1.jpg"
}, {
    id: "lampRosie",
    name: "LAMP 'ROSIE'",
    price: "79,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/lamp2.jpg"
}, {
    id: "lampJosy",
    name: "LAMP 'JOSY'",
    price: "119,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/lamp3.jpg"
}, {
    id: "lampPaula",
    name: "LAMP'PAULA'",
    price: "79,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/lamp4.jpg"
}, {
    id: "lampLucy",
    name: "LAMP 'LUCY'",
    price: "129,99",
    desc: "a simple elegant necklace for ",
    img: "livingImages/lamp5.jpg"
}]


let myBasket = JSON.parse(localStorage.getItem("data")) || [];


let createShop = () =>{
    return (decorContainer.innerHTML = vasesData
        .map((x) => {
        /*let {id, name, price, desc, img} = x; ohne diese deklaration müssten wir ${x.img} usw schreiben...*/

        let { id, name, desc, img, price } = x;
        let search = myBasket.find((x)=> x.id === id) || []
        // search für jedes gespeicherte Element, 
        // wenn Seite gerefresht wurde und die Anzahl der Elemente bei 0, local storage jedoch
        // gespeicherte Elemente hat (wir wollen dass das Display immer die im local storage
        // gespeicherten Daten direkt anzeigt)
        // search kommt weiter unten als Ersatz für die Null

        return  ` 
        <div id="productId${id}" class="item" data-aos="fade-up">


           <div class="itemImage">
              <img src="${img}" alt="" style="width: 250px">
            </div>

            <div class="itemTitle">
              <p class="itemTitleDesc">${name}</p>
              <h3>${price}</h3>
            </div>

            <div class="addSection">
              <div class="addToWishlist"> 
                <i class="bi bi-balloon-heart"></i>
              </div>


              <div class="counter" >
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <p class="quantity" id=${id}> 
                ${search.item === undefined? 0: search.item} </p>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
            

            </div>

           

        </div> `
    })
    .join(" "));
}

createShop(); 


let createCarpets = () =>{
    return (carpetContainer.innerHTML = carpetData
        .map((x) => {
        /*let {id, name, price, desc, img} = x; ohne diese deklaration müssten wir ${x.img} usw schreiben...*/

        let { id, name, desc, img, price } = x;
        let search = myBasket.find((x)=> x.id === id) || []
        // search für jedes gespeicherte Element, 
        // wenn Seite gerefresht wurde und die Anzahl der Elemente bei 0, local storage jedoch
        // gespeicherte Elemente hat (wir wollen dass das Display immer die im local storage
        // gespeicherten Daten direkt anzeigt)
        // search kommt weiter unten als Ersatz für die Null

        return  ` 
        <div id="productId${id}" class="item" data-aos="fade-up">


           <div class="itemImage">
              <img src="${img}" alt="" style="width: 250px">
            </div>

            <div class="itemTitle">
              <p class="itemTitleDesc">${name}</p>
              <h3>${price}</h3>
            </div>

            <div class="addSection">
              <div class="addToWishlist"> 
                <i class="bi bi-balloon-heart"></i>
              </div>


              <div class="counter" >
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <p class="quantity" id=${id}> 
                ${search.item === undefined? 0: search.item} </p>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
            

            </div>

           

        </div> `
    })
    .join(" "));
}

createCarpets();


let createLamps = () =>{
    return (lampsContainer.innerHTML = lampsData
        .map((x)=>{
            let { id, name, desc, img, price } = x;
            let search = myBasket.find((x)=> x.id === id) || []

            return  ` 
            <div id="productId${id}" class="item" data-aos="fade-up">
    
    
               <div class="itemImage">
                  <img src="${img}" alt="" style="width: 250px">
                </div>
    
                <div class="itemTitle">
                  <p class="itemTitleDesc">${name}</p>
                  <h3>${price}</h3>
                </div>
    
                <div class="addSection">
                  <div class="addToWishlist"> 
                    <i class="bi bi-balloon-heart"></i>
                  </div>
    
    
                  <div class="counter" >
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <p class="quantity" id=${id}> 
                    ${search.item === undefined? 0: search.item} </p>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                  </div>
                </div>
                
    
                </div>
    
               
    
            </div> `
        })
        .join(" "));
            

       
}

createLamps();







/*------------------------------- INCREMENT AND DECREMENT FCTS TO ADD ITEMS TO CART ------------------------------- */

function addItemToCart(){
    
    let counter = document.querySelector('.counter')
    let removeCartSymbol = document.querySelector('.removeCartSymbol')
    console.log(counter)

    counter.style.display = 'flex'
    removeCartSymbol.style.display = 'none'
}


let increment = (id) => {
    let selectedItem = id;
    

    //does the clicked element exist?
    let search = myBasket.find((x) => x.id ===  selectedItem.id);

    //if the element does not exist then add it to the shopping cart. 
    // else if it already exists then increase the quantity of the element by 1

    if (search === undefined){
        myBasket.push({
            id: selectedItem.id,
            item: 1,
        })
    
        console.log(myBasket)
    } else{
        search.item +=1;
    }

    localStorage.setItem("data", JSON.stringify(myBasket));
    //console.log(myBasket);
    update(selectedItem.id);
  };





let decrement = (id) => {
    let selectedItem = id;
  
    //does the clicked element exist?
    let search = myBasket.find((x) => x.id ===  selectedItem.id);
  
      //if the element does exist then remove it from the shopping cart. 
      // else if it already exists then increase the quantity of the element by 1
  
      if(search === undefined){
          return //means do not do anything, just go ahead
      } else if(search.item === 0){
          return
      } else{
          search.item -=1;
      }
  
      localStorage.setItem("data", JSON.stringify(myBasket));
  
      // console.log(myBasket)
      update(selectedItem.id);
    
  };


let update = (id) => {
    let search = myBasket.find((x)=> x.id === id);

    console.log(search.item)

    
    document.getElementById(id).innerHTML = search.item;
    calculation();

}

let calculation = () =>{
    let basketIcon = document.getElementById('basketIcon')
    basketIcon.innerHTML=myBasket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // 0 : we want the calculation to start from zero
}

calculation();