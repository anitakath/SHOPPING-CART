let myWishlist = JSON.parse(localStorage.getItem("data")) || [] 

let calculation = ()=>{
    let wishlistIcon = document.getElementById('wishlistIcon')
    wishlistIcon.innerHTML = myWishlist.map((x) => x.item).reduce((x, y)=> x+y, 0)
}

calculation();