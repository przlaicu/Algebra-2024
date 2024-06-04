
window.onload = function () {
    console.log('Page fully loaded');
};

// creating new elements
var main = document.getElementById('main');
console.log(main);

var newDiv = document.createElement('div');
console.log(newDiv);

// Appending <div> to HTML
main.appendChild(newDiv);

// Parent node i Body
// main.parentNode.removeChild(main);
var parent = main.parentNode; // body
// parent.removeChild(main); // remove main from body

// texContent vraća sve --> vraća običan text
// innerText vraća vidljiv text --> vraća običan text