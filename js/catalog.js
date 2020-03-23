/* global Product, Cart */
'use strict';

// Set up an empty cart for use on this page.
// From Class: Persistent Cart
var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
var cart = new Cart(cartItems);
// var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  updateCounter()
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.value = Product.allProducts[i].name;
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  updateCartPreview();
  addSelectedItemToCart();
  updateCounter();
  cart.saveToLocalStorage();
  
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  var selectedItem = document.getElementById('items');
  var itemValue = selectedItem.value;
  // TODO: get the quantity
  var selectedQuantity = document.getElementById('quantity');
  var itemQuantity = selectedQuantity.value;
  // TODO: using those, add one item to the Cart
  if (parseInt(itemQuantity) > 0) {
    cart.addItem(itemValue, itemQuantity);
    selectedQuantity.value = null;
  }
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  if (cart.items.length > 0) {
    var itemCountEl = document.getElementById('itemCount');
    itemCountEl.textContent = ' ' + cart.items.length;
  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form 
  var selectedItemEl = document.getElementById('items');
  var itemValue = selectedItemEl.value;
  var selectedQuantityEl = document.getElementById('quantity');
  var itemQuantity = selectedQuantityEl.value;
  // TODO: Add a new element to the cartContents div with that information
  var cartContentsEl = document.getElementById('cartContents');
  
  var itemPreviewEl = document.createElement('p');
  var quantityPreviewEl = document.createElement('p');
  var breakEl = document.createElement('br'); // temporary solution, possibly;
  
  if (itemQuantity !== NaN && parseInt(itemQuantity) > 0) {
    itemPreviewEl.textContent = 'Item: ' + itemValue;
    quantityPreviewEl.textContent = 'Amount: ' + itemQuantity;
    
    cartContentsEl.appendChild(itemPreviewEl);
    cartContentsEl.appendChild(breakEl);
    cartContentsEl.appendChild(quantityPreviewEl);
    cartContentsEl.appendChild(breakEl);
    cartContentsEl.appendChild(breakEl);
  }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
