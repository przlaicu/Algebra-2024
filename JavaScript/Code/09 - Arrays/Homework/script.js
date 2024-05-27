const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parni = [];
var number = 0;
var calculated = 0;
var average = 0;

for (var i = 0; i <= numbers.length; i++) {
    number = numbers[i];
    if (number % 2 === 0) { // == provjera vrijednosti, === provjera vrijednosti i tipa podatka
        parni.push(number);
        calculated = number + calculated;
        average = calculated / parni.length;
    }

}

console.log('Parni brojevi u listi su: ' + parni);
console.log('Zbroj parnih brojeva u array-u je: ' + calculated);
console.log('The average of even number is: ' + average);
