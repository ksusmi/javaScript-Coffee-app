"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
//using javascript
const addButton = document.querySelector('.add-to-order');

/* addButton.addEventListener('click', () => {

   addItemToCart('Coffee');  // here we are hardcoding the key
   incrementCartTotal(1.50); // and the value hardcoded
 }); */

// OR
// below we are not hard coding
addButton.addEventListener('click', event => {
  const button = event.target;
  const buttonCol = button.parentNode;
  const buttonRow = buttonCol.parentNode;
  /* const items = buttonRow.querySelectorAll("td");
  addItemToCart(items[0].innerText);
  incrementCartTotal(parseFloat(items[1].innerText)); */
  addItemToCart(buttonRow.querySelector(".item-name").innerText);
  incrementCartTotal(parseFloat(buttonRow.querySelector(".item-price").innerText))
});


// using jquery library for javaScript
/*$('.add-to-order').on('click', () => {   /// $('.add-to-order') == its similar to document.queryselector
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});*/
 
//using javascript
const orderButton = document.querySelector('#place-order');

orderButton.addEventListener('click', () => {
  setProgressAndStatus(50, "Getting it ready!");
  //const amountSold = $('#cart-items').children().length;  //jQuery
  /* const cart = document.querySelector("#cart-items");
   const amountSold = cart.querySelectorAll('tr').length; */ //OR just one line
  const amountSold = document.querySelectorAll('#cart-items tr').length; //javascript tr is the child of cart-items.
  incrementCoffeeSold(amountSold);
  resetCart();
});
