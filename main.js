// hol alle Items an Land

const itemContainer = document.getElementById('itemContainer')
const item = document.querySelectorAll('.item')

const cartItems = document.getElementById('cartItems')



let NecklacesData = [{
    id: "necklace-hana",
    name: "NECKLACE 'HANA'",
    price: "79,99",
    desc: "a simple elegant necklace ",
    img: "shoppingImages/necklaceI.jpg"
}, {
    id: "necklace-amelie",
    name: "NECKLACE 'AMELIE'",
    price: "89,99",
    desc: " a simple elegant necklace ",
    img: "shoppingImages/necklaceIII.jpg"
}, {
    id: "necklace-cleo",
    name: "NECKLACE 'CLEO'",
    price: "79,99",
    desc: " a simple elegant necklace ",
    img: "shoppingImages/necklaceII.jpg"
}, {
    id: "necklace-freya",
    name: "NECKLACE 'FREYA'",
    price: "79,99",
    desc: " a simple elegant necklace ",
    img: "shoppingImages/necklace10.jpg"

}, {
    id: "necklace-alisha",
    name: "NECKLACE 'ALISHA'",
    price: "79,99",
    desc: " a simple elegant necklace ",
    img: "shoppingImages/necklace11.jpg"
}, {
    id: "necklace-louise",
    name: "NECKLACE 'LOUISE'",
    price: "79,99",
    desc: " a simple elegant necklace ",
    img: "shoppingImages/necklace12.jpg"
}]

let myBasket = []

// loope durch die Items
// füge einen eventlistener hinzu, der das Item einloggt, welches angeklickt wird



let createShop = () =>{
    return (itemContainer.innerHTML = NecklacesData
        .map((x) => {
        /*let {id, name, price, desc, img} = x; ohne diese deklaration müssten wir ${x.img} usw schreiben...*/

        let { id, name, desc, img, price } = x;

        return  ` 
        <div id="productId${id}" class="item ring" value="ring">

           <h2 class="title">${name}</h2>
           <div class="itemImage">
              <img src="${img}" alt="" style="width: 250px">
           </div>
           
           <div class="itemTitle">
                <p class="stars">✨</p>
                <p>${desc}</p>
                <h3>${price}</h3>
                
           </div>

           <div class="counter">
             <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
             <p class="quantity" id=${id}> 0 </p>
             <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                  
           </div>

        </div> `
    })
    .join(" "));
}

createShop(); 
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
let increment = (id) => {
    let selectedItem = id;
    console.log(selectedItem)
    
  };



let decrement = (id) => {
  let selectedItem = id;
  console.log(selectedItem)

  
};









/* 





for(let i = 0; i < item.length; i++){
    item[i].addEventListener('click', function (){
    
        console.log(item[i])
        
        // create a styled div for cart items
        let createDiv = document.createElement('div')
        createDiv.classList.add('itemDesign')
        cartItems.appendChild(createDiv);
        
        // create a paragraph for created div
        let createParagraph = document.createElement('p')
        let itemTitle = createParagraph
        createDiv.appendChild(itemTitle)

        // value from  clicked item

        let itemValue = item[i].getAttribute('value');
        itemTitle.innerText = itemValue;


        let addItemToBasket = function (item){
            let addedItem = myBasket.push(item[i])
            console.log (addedItem)
        }

        
    })
}







const itemTitle = document.querySelectorAll('.itemTitle')


for(let j = 0; j < item.length; j++){
    item[j].addEventListener('mouseover', function(){
        for (let k = 0; k < itemTitle.length; k++){
            itemTitle[k].style.display = 'inline-block'
            itemTitle[k].style.fontSize = '20px'
            itemTitle[k].style.transition = '0.4s ease'
            itemTitle[k].style.bottom = '80px'
        }
    })
}













 


// wenn Item angeklickt, display des inhalts im basket
*/