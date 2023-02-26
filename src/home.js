
/* ------------------------------- DATA AND SHOP GRID -------------------------------*/

const decorContainer = document.getElementById('decorContainer')
// const item = document.querySelectorAll('.item')
// const cartItems = document.getElementById('cartItems')





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
    return (carpetContainer.innerHTML = carpetsData
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