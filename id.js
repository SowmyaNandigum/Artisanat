


var addToCart = document.getElementsByClassName('add-to-cart')[0];

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
/*function getCookie(){
   if(document.cookie.length!=0)
   {
    alert(document.cookie);
   }
   else{
    alert("Item not available")
   }
  

}*/
setCookie('cart','{}')
function checkCookie(){
    let cartArray = getCookie("cartArray");
    if(cartArray != ""){
        alert(cartArray);
    }
    else{
        cartArray = print("Not initialised");

    }
    console.log(checkCookie);
}

var cart =JSON.parse(getCookie('cart'))

setCookie('cart',JSON.stringify('cart'))


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  let temp = {items:["p1","p2","p3"]}
  setCookie('cart',JSON.stringify(temp))
  getCookie('cart')


  addToCart.addEventListener('click',()=>{
   d = document.getElementById('p1').innerText;
   cart.items.push(d);
   setCookie('cart',JSON.stringify(cart))
})
