
var words = ['Hello', 'Africa', 'Welcome']; // literal

var arrya2 = new Array('Eat', 'Sleep'); // constructor new 

// Empty array
var emptyArray = [];

// Array of Numbers

var numberArray = [2, 4, 6, 8, 10];

// Array of strings
var arrayStrings = ['eat', 'work', 'sleep'];

// Array with mixed data type
var mixedArray = ['work', 'exercise', 1, true, false];

/*
* Acces elements of an array
*/ 

var myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);

// Pushin elements 

var daillyActivites = ['eat', 'sleep'];
daillyActivites.push('exercise');
console.log(daillyActivites);

// add element on start of list
daillyActivites.unshift('wake up');
console.log(daillyActivites);

// remove last element from list
daillyActivites.pop(); // zagrade prazne
console.log(daillyActivites);

var removedElemet = daillyActivites.pop();
console.log(removedElemet);
console.log(daillyActivites);

// get lengt of array
console.log(daillyActivites.length);

// for loop
var students = ['John', 'Jane', 'Mike', 'Marc', 'Daniel', 'Sophie'];
var activeStudenst = [];

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
    activeStudenst.push(students[i]);
}

console.log(activeStudenst);
