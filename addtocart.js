if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    
    var removeCartItemButtons = document.getElementsByClassName('bx bx-x')
    for (var i = 0; i < removeCartItemButtons.length; i++)
    {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        updateCartTotal()
    }
    
   /* var addToCartButtons = document.getElementsByClassName('butt1')
    for (var i = 0; i < addToCartButtons.length; i++) 
    {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
        updateCartTotal()
    }*/

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change' , quantitychanged)
    }
}

function removeCartItem(event) 
{
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantitychanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <=0){
        input.value = 1
    }
    updateCartTotal()
}

/*function addToCartClicked(event) 
{
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('image')[0].src
    console.log(title,price,imageSrc)

   addItemToCart(title,price,imageSrc)   
}


function addItemToCart(title, price, imageSrc) 
{
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents = ` <div class="cart-item cart-column">
    <img class="cart-item-image" src="ART(PAINTS)/cbc662299bd35357e519fe867444b86c.jpg"
    width="100" height="100">
    <span class="cart-item-title">Beautiful sunset</span>
    
</div>
<span class="cart-price cart-column">2328/-</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <i class='bx bx-x'></i>
</div>`
cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)

    
}*/


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('/-',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    
    document.getElementsByClassName('cart-total-price')[0].innerText = total + '/-'
}

/*
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
   name: 'beautiful sunset',
   price: 2328,
   incart: 0
    },
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() => {
       cartNumbers(products[i]);
    })
}



function cartNumbers(product)
{

   
    let productNumbers = localStorage.getItem('cartNumbers');
   
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } else{
        localStorage.setItem('cartNumbers', 1);
        
    }
    
    setItems(product);
}

function setItems(product){
    
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    

    if(cartItems != null){

cartItems[product.tag].incart += 1;
    }
    product.incart = 1;
cartItems = {
    [product.tag]: product
}
   
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

var noti = document.querySelector('h1');
var select = document.querySelector('.cart-items');
var button = document.getElementsByClassName('butt1');
for(but of button){
    but.addEventListener('click' , (e)=>{
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count',add + 1);
        noti.classList.add('zero');



        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";
        if(clone){
            noti.onclick=()=>{
                select.classList.toggle('display')
            }
        }

    })
}*/
