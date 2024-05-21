var text = ' Lorem ipsum dolor sit amet';

// 1
var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2
var start = 19;
var end = 22;
var word = text.substring(start, end);
console.log(word);


// 3
var searchWord = 'amet';
var replaceWord = 'elit';
console.log(text.replace(searchWord, replaceWord));

// 4
var newString = text + ", consectetur adipiscing elit";
console.log(newString);

// 5
console.log(text.toUpperCase());

// 6
console.log(text.trim());

// 7
var stringAt = text.charAt(12); // nema ništa jer je prazno mjesto
console.log(stringAt);