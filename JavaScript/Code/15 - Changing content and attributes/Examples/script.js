// Example number 1
// Create paragraf
var para = document.createElement('p');

// Get div element
var element = document.getElementById('div1');

// inject <p>
element.appendChild(para)

var textNode = document.createTextNode('Hello africa an i new here');

// injecting text into paragraf
para.appendChild(textNode);

// Example number 2

var para2 = document.getElementById('p2');
para2.remove(); 

// Example 3
var h1 = document.querySelector('h1');
h1.innerText = 'Hello Africa from inner Text';
h1.setAttribute('class', 'hero');
h1.setAttribute('id', 'hero');

// Example 4
document.querySelector('#div2').innerHTML = '<h1> Dodao sam Hello Africa</h1>';
