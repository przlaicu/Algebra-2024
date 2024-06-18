// Advanced Functions

function outerFunction(outerVariable) {
    var outer2 = 'Hello Africa';
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVariable);
        console.log(outer2);
    };
}

outerFunction('1st brackets')('2and brackets');

var newFunction = outerFunction('Outer');
newFunction('Inner');