console.log('CART.JS')



let myBasket = JSON.parse(localStorage.getItem("data")) || [] 


let calculation = () =>{
    let basketIcon = document.getElementById('basketIcon')
    basketIcon.innerHTML=myBasket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // 0 : we want the calculation to start from zero
}

calculation();
// 02:04 youtube







const cartTitle = document.getElementById('cartTitle')
const cartContent = document.getElementById('cartContent')
const cartContainer = document.getElementById('cartContainer')

let generateCartItems = () =>{
    if(myBasket.length !== 0){
        return cartContent.innerHTML = myBasket.map((x)=>{
            /*console.log(myBasket)
            console.log(x)
            console.log(NecklacesData)*/
            let { id, item } = x;
            let find= necklacesData.find((x) => x.id === id) || [];
            let { img, price, name } = find;

            // console.log(find)
            

            /*
            let findLamps = lampsData.find((x) => x.id === id) || [];
            let {img, price, nameL = findLamps;

              */
            
           

            let mltplktn = x.item * find.price;
            mltplktn = mltplktn.toFixed(2);

            console.log(item)
            
       

            return `
            
            
              <div class="cartItem"> 

                <div class="img"> 
                <img src="${img}" class="cartImage"> </div> 

                <div class="content">
                  <div class="itemTitle"> ${name} <span> - ${price} - </span> </div>
                  <div class="itemPrice"> $ ${mltplktn}</div>
                  
                  <div class="quantity"> 
                    <div class="itemQuantity">

                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                      <h4 class="quantity" id=${id}> ${x.item} </h4>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    
                    
                    </div>
                    <div class="itemDelete">
                       <i class="bi bi-trash3" onclick="removeItem(${id})"></i>
                     </div>
                  
                  </div>

                </div>
              </div>
            
            
            `
        })
        .join(" ");

    } else{
        cartContent.innerHTML = `
        <h1 class="emptyBasket"> YOUR BASKET IS EMPTY </h1> 
        `;

        cartTitle.innerHTML=`
        <h2>
        <a href="index.html" style="color: red"> GO BACK TO THE MAIN PAGE </a>
        </h2>
        `;
        cartContainer.style.fontSize = '1rem'

    }
}


generateCartItems();





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
      generateCartItems();
  }

  totalBill();
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
 
  totalBill();
  update(selectedItem.id);
  myBasket = myBasket.filter((x) => x.item !== 0);
  generateCartItems(); // to delete to 0 decremented item
  // because after the filter it re-renders the cart items
  localStorage.setItem("data", JSON.stringify(myBasket));
};


let update = (id) => {
  let search = myBasket.find((x)=> x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();

}


let removeItem=(id)=>{
  let selectedItem = id;

  // console.log(selectedItem.id)

  //remove the clicked item from myBasket-Array
  
  myBasket = myBasket.filter((x) => x.id !== selectedItem.id)
  generateCartItems(); 
  totalBill();
  localStorage.setItem("data", JSON.stringify(myBasket));
  
  
  
}


//2:56 youtube...
let totalBill =()=>{
  if(myBasket.length !==0){
    let amount = myBasket.map((x) =>{
      let {item, id} = x;
      let find = necklacesData.find((x) => x.id === id) || [];
      return item * find.price;
      
    }).reduce((x,y)=> x+y, 0)
    //console.log(amount)
    amount = amount.toFixed(2);

    let totalBill = document.getElementById('totalBill');
    totalBill.innerHTML = `${amount}`;
    

  } else return
}

totalBill();

