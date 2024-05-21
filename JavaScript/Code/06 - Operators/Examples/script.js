
var a = 6;
var b = '5';

console.log(typeof a);
console.log(typeof b);

// ARITMETIC
console.log(a + b); // radi se o opreateru konkatenacije 65
console.log(a + +b);// konverziuja iz stringa u broj 11
console.log(a - b); // string i number možemo oduzimat 1
console.log(a * b); // 30 
console.log((a * 7.4).toFixed(2)); // 44,40
console.log(a / b); // 1.2
console.log(a / 0); // infinity
console.log(a / Infinity); // 0
console.log(a % 6); // odgovor je 0 nema ostatka

// COMPARISON
console.log(a == b); // Equal operator
console.log(a === b); // Strict operator
console.log('' == 0); // Falsy true

// LOGICAL
console.log(5 < 6 && 6 == 6); // true
console.log(5 < 6 || 6 == 5); // true
console.log(!(5 < 6)); // false

// CONDITIONAL (TERNARY)
console.log(1 == 1 ? 'This is equale' : 'This is not eqal');
console.log(1 === '1' ? 'This is equale' : 'This is not eqal');
