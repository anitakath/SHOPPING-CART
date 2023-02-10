const itemContainer = document.getElementById('itemContainer')

let shopItemsData = [{
    id: "ring-abc",
    name: "ring",
    price: "29,99",
    desc: " a simple elegant ring ",
    img: "shoppingImages/ringI.jpg"
}, {
    id: "necklace-abc",
    name: "necklace",
    price: "59,99",
    desc: " a simple elegant necklace ",
    img: "shoppingImages/necklaceIII.jpg"
}, {
    id: "bracelet-abc",
    name: "bracelet",
    price: "49,99",
    desc: " a simple elegant bracelet ",
    img: "shoppingImages/braceletI.jpg"
}]



let createShop = () =>{
    return (itemContainer.innerHTML = shopItemsData.map((x) =>{
        return  ` 
        <div class="item ring" value="ring"> 
    
            <div class="itemTitle itemTitleRing">
                <h2>ring</h2>
            <div class="counter">
    
            <i class="bi bi-dash-lg"></i>
            <p class="quantity"> 0 </p>
            <i class="bi bi-plus-lg"></i>
                  
            </div>
        </div> `
    })
)
}

createShop();