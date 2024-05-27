
// fuction without return
function greet(name){
    console.log('Hello ' + name);
}

greet('Africa');

// function that is returning value
function add(a, b) {
    // function body
    return a + b;
}

// Invoke the function

console.log(add(2, 3));
console.log(add(5, 37));

function dynamicGreet(name) {
    console.log(`Hello, ${name}. sada pozdravljam opet tebe buahahhaha`); // alt gr + 7 --> `` za string kontekanaciju
}
/* Promt not defined in vscode zato je zakomentirano
var student = prompt('Enter a name: ');
dynamicGreet(student);
*/

// self invocing function --> funckija koja zove samu sebe pokretati u browser-u
(function greet(){
    console.log("Hello, i have called my self")
})();

(function calculateBMI(){
    var result;

    var pearson = prompt(`Please enter your name: `);
    var weight = prompt(`What is your weight, ${pearson} ?`);
    var height = prompt(`And what is your height, ${pearson} ?`);

    result = weight / (height * 2);

    alert(`${pearson} your BMI score is ${result.toFixed(2)}`);

})();

