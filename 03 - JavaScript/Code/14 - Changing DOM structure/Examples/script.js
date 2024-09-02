
window.onload = function () {
    console.log('Page fully loaded');
    document.body.style.backgroundColor = 'aliceblue'; // Change background color of body
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

// Removing and adding classes using classList
main.classList.add('hiden');
main.classList.remove('main');
console.log(main.classList); // returns array of classes

// changed background of body
function setBackground() {
    document.body.style.background = 'lavender';
    alert('Hello Affrica changed color');
}

function changeColor(newColor) {
    var element = document.getElementById('main');
    element.style.color = newColor;
}

function hideEverything() {
    document.getElementById('main').style.display = 'none';
}


function submitForm() {
    var fName = document.getElementById('name').value;
    var lName = document.getElementById('surname').value;

    alert(`Moj ime je ${fName} ${lName}`);
}

var button = document.getElementById('submit');
button.addEventListener('click', submitForm);

function checkTags() {
    var main = document.getElementById('main');
    var tags = main.getElementsByTagName('button');
    console.log(tags);

    alert(`There are  ${tags.length} buttons in mian`);
}

// creating new element (div)

function newElement() {
    var div = document.createElement('div');
    div.innerText = 'This is new africa in <div>';
    div.className = 'new-div';
    div.id = 'hero';

    var parent = document.getElementById('main');
    parent.appendChild(div);
}

function removeElement() {
    var div = document.getElementById('hero');
    var parent = div.parentNode;
    parent.removeChild(div);
}

function removeElementWithoutParentNode() {
    var div = document.getElementById('hero');
    div.remove();
}

function getEverything() {
    var klasa = document.querySelector('.footer');
    var id = document.querySelector('#footer');
    var name = document.querySelector(`input[name = 'footer']`);

    console.log(klasa);
    console.log(id);
    console.log(name);
}