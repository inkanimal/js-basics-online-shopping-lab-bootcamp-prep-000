var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {



  // write your code here

// write your code here


function total() {
  // write your code here
}


  function removeFromCart(item) {
    for (var i=0; i<cart.length; i++) {
      if (Object.keys(cart[i]) == item) {
        cart = [...cart.slice(0,i), ...cart.slice(i+1)];

      }
      return cart;
    }


  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
