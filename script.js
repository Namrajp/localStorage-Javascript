// Declaring constants to hold form and document elements
const form = document.querySelector('form');
const input = document.getElementById('item');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
// Checking existing local storage if exists using if condition,below using ternary 
let itemsArray;
if (localStorage.getItem("items")) {
	 itemsArray = JSON.parse(localStorage.getItem("items"));
}
else {

	itemsArray = [];
}
// since array is not supported, it gets converted to string for local storage 'value' of key 'items' for storage, while it gets converted to array using JSON.parse(localStorage.getItem('items'))
// localStorage.setItem('items',JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// Making list maker function to create and add list items
const liMaker = text => {
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li)
}

// Using form to submit new list items
form.addEventListener('submit', function(e) {
	e.preventDefault();
	// prevent the form submit to another page using 'get' or 'post' global variable

	itemsArray.push(input.value);
	localStorage.setItem('items',JSON.stringify(itemsArray));
	liMaker(input.value);
	input.value = '';
})

// Adding existing local storage to top of unordered list
data.forEach(function(item) {
	liMaker(item);
})

// Clearing the localStorage as well as unordered list
button.addEventListener('click',function() {
	while (ul.firstChild) {
		localStorage.clear();
		ul.removeChild(ul.firstChild);
	}
})

// Source: https://www.taniarascia.com/how-to-use-local-storage-with-javascript/









