/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableEl = document.getElementsByTagName('tbody')[0];
  console.log(tableEl);
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (var i = 0; i < cart.items.length; i++) {
    var rowEl = document.createElement('tr');
    var itemCell = document.createElement('td');
    var quantityCell = document.createElement('td');
    var deleteCell = document.createElement('td');

    // Making the delete link
    var deleteEl = document.createElement('div');
    // deleteEl.setAttribute('');

    itemCell.textContent = cart.items[i].product;
    quantityCell.textContent = cart.items[i].quantity;
  
    rowEl.appendChild(itemCell);
    rowEl.appendChild(quantityCell);
    rowEl.appendChild(deleteCell);

    tableEl.appendChild(rowEl);
  }

}

function removeItemFromCart(event) {
  console.log('test');
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
