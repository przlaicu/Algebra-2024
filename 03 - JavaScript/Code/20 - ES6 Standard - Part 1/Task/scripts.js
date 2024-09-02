// 1.
"use strict";
var a = 78;
var b = 0.34;
// delete a;
// delete b;
var myObject = {property1:1, property2:2, property1:1};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const spojeniUsers = [...users, user];
console.log(spojeniUsers);


// 3.
for (var i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
 console.log(i);
}



