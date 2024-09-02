var x = 'Lorem ipsum',
    y = 2345,
    z = '2345'
q = false;

// 1. 
var trueFalse = !!'false' == !!'true';

// trueFalse vraća true jer string ptretvara u false pa u true

// 2. 
console.log(q || x || y || z);

// vraća true

// 3. 
var num = 6;
num--;
console.log(num);

// num je 5 zbog umanjivanja znaka --

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
totalPrice.toFixed(2);

console.log('Total:', totalPrice);

// ispis će biti 28,6700000000 zato jer se linija koda totalPrice.toFixed(2);
// ne primjeni jer se ne može mijenjati vrijednost varijable