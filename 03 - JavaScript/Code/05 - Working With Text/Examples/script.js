
var greet = "Hello, ";
var firstName = "Africa";

var user = greet + firstName;

console.log(user);
console.log("I have 42 " + "years");
console.log("I have " + " " + "'3' dogs");

console.log("I live in Zagreb, the capital of \nRebublic of Croatia");

// Lenght
var str = "Life, the universe and everything.";
console.log(str.length);

// CharAt - couting starts from 0, spaces are not ignored
var sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.charAt(6) + " to je slovo i jer broji prvi od nule 0");

// Trim
var greeting = "             Hello Africa!!";
console.log(greeting.trim()); // obavezno sa zagradom jer se tako poziva metodica

// IndexOOf
var paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
searchTerm = "dog";
var indexOfFirst = paragraph.indexOf(searchTerm); // 40
console.log("Search term is found at " + indexOfFirst);

var secondTerm = paragraph.indexOf(searchTerm, indexOfFirst + 1);
console.log("2nd search term is found at " + secondTerm); // 52 where is second dog is found

// toUpperCase and toLowerCase
var sentence2 = "The quick brown FOX jumps over the lazy DOG";
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());




