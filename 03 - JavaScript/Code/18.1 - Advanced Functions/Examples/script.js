/**************************************************
 * BIND
 **************************************************/
function multiply(x, y) {
    console.log({x, y});
    return `${this.name} has ${(x * y)} points. `;
}

var person2 = {
    name: 'Harry',
};

var person3 = {
    name: 'Ron',
};

var two = multiply.bind(person2, 2); // prvi argument objekt drugi x
console.log(two(3));

var three = multiply.bind(person3);
console.log(three(10, 6));

/**************************************************
 * CALL
 **************************************************/

var person4 = {
    name: 'Harry',
};

var person5 = {
    name: 'Ron',
};

function greet(greeting, other) {
    console.log(`${greeting}, ${this.name}`);
    console.log(`${other}, ${this.name}`);
}

greet.call(person4, 'Hello', 'Hi'); // prvo oobjekt pa opcionalni argumenti

/**************************************************
 * APPLAY
 **************************************************/

greet.apply(person5, ['Hello', 'Hi']); // razlika izmežu CALL i APPLAY argumenti idu u array

/**************************************************
 * EXAMPLE
 **************************************************/

function pozdravi(ime) {
    console.log(`Pozdrav, ${ime} ! Moje ime je ${this.ime}`);
}

var osoba = {
    ime: 'John',
}

pozdravi.apply(osoba, ['Alice']);