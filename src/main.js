

// hol alle Items an Land

const itemContainer = document.getElementById('itemContainer')
const item = document.querySelectorAll('.item')
const cartItems = document.getElementById('cartItems')


let myBasket = JSON.parse(localStorage.getItem("data")) || [];
//JSON.parse, damit wir die im lokalen Speicher gespeicherten Daten 
//beim Refreshen der Seite wieder aufrufen können


let myWishlist = JSON.parse(localStorage.getItem("dataWishlist")) || [];




// loope durch die Items
// füge einen eventlistener hinzu, der das Item einloggt, welches angeklickt wird



let createShop = () =>{
    return (itemContainer.innerHTML = necklacesData.map((x) => {
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
                <i onclick="addToWishlist(${id})" class="bi bi-balloon-heart"></i>
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




function addItemToCart(){
    
    let counter = document.querySelector('.counter')
    let removeCartSymbol = document.querySelector('.removeCartSymbol')
    console.log(counter)

    counter.style.display = 'flex'
    removeCartSymbol.style.display = 'none'
}


let addToWishlist = (id) =>{

    //access the selected items' id
    let selectedItem = id;
    //check, whether there is a conformity between the selected items' id 
    //and the id of an already exciting item
    let search = myWishlist.find((x) => x.id === selectedItem.id);

    // add an element with the items' id to the array if search couldnt find an already existing item
    if(search === undefined){
        myWishlist.push({
            id: selectedItem.id,
            item: 1,
        })

        console.log(myWishlist)
    } else{
        search.item +=1;
    }

    updateWishlist(selectedItem.id);
    localStorage.setItem("dataWishlist", JSON.stringify(myWishlist));
}


let calculationWishlist =()=>{
    let wishlistIcon = document.getElementById('wishlistIcon')
    wishlistIcon.innerHTML=myWishlist.map((x) => x.item).reduce((x, y) => x+y, 0);
}

calculationWishlist();

let updateWishlist = (id) =>{
    let search = myWishlist.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculationWishlist();
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

    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(myBasket));
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


  
    
    // dies filtert alle Elemente, deren Anzahl nicht 0 ist! 
    //lässt Element, das zuvor erhöht wurde aus dem Warenkorb verschwinden, wenn es wieder auf 0 gesetzt wird!

    // console.log(myBasket)
   
    update(selectedItem.id);
    myBasket = myBasket.filter((x) => x.item !== 0);
    console.log(myBasket);
    localStorage.setItem("data", JSON.stringify(myBasket));
};


let update = (id) => {
    let search = myBasket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();

}


let calculation = () =>{
    let basketIcon = document.getElementById('basketIcon')
    basketIcon.innerHTML=myBasket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // 0 : we want the calculation to start from zero
}

calculation();




/*
let styleTheContainersChildren = ()=>{
   let itemContainerChildren = itemContainer.children;
  

   for (let i = 0; i < itemContainerChildren.length; i++){

       let childElement = itemContainerChildren[i];

       childElement.addEventListener('click', ()=>{
           childElement.style.border = '0.2px solid black'
           
       })
   }
}

styleTheContainersChildren();
*/

const itemImage = document.querySelectorAll('.itemImage')


itemImage.forEach(image =>{
    image.addEventListener('click', ()=>{

        removeActive();

        image.classList.add('active');
    })
})

function removeActive(){
    itemImage.forEach(image =>{
        image.classList.remove('active');
    })
}


let enlargeContainersChildren =()=>{
    let itemContainerChildren = itemContainer.children;

    for (let i = 0; i < itemContainerChildren.length; i++){
        let childElement = itemContainerChildren[i];

        childElement.addEventListener('click', ()=>{

            const enlarged = document.querySelector('.enlarged')
            if (!childElement.classList.contains(enlarged)){
                childElement.classList.add(enlarged)
            } else{
                childElement.classList.remove(enlarged)
            }
        })
    }

}

enlargeContainersChildren();


/*
const decrementRing = document.getElementById('decrementring')
const incrementRing = document.getElementById('incrementring')
const incrementBracelet = document.getElementById('incrementbracelet')
const decrementBracelet = document.getElementById('incrementbracelet')
const incrementNecklace = document.getElementById('incrementnecklace')
const decrementNecklace = document.getElementById('')
*/

/* WHY OCCURS AN ERROR WHEN USING INCREMENT() AND DECREMENT() WHEN ONCLICK="INCREMENT(${X.ID}" ON HTML I-TAG WITHIN CREATESHOP() ??? 
SAYING VARIABLE RING/NECKLACE, BRACELET IS NOT DEFINED AT INDEX??? */





/*
const mobileNav = document.getElementById('webNav')
const mobileMain = document.getElementById('mobileMain')

mobileMenuContainer.addEventListener('click', ()=>{
    mobileNav.style.transform = 'translateY(10px)'
    mobileNav.style.transition = '1s ease-in'
    mobileMain.style.opacity = '0.3'
    mobileMain.style.transition = '1s ease-in'
})*/