
/*
function convertFromFahrenheitToCelzijus() {

    console.log('Uneiste temperaturu u Fahrenheit slijedi konvertiranje u Selzijuse');
    var fahrenheit = prompt(`Temperatura u Fahrenheit: `);
    var celsius = (5/9 * fahrenheit - 32).toFixed(2);
    console.log(`Temperatura u celsius je: ${celsius}`);
}


convertFromFahrenheitToCelzijus();
*/

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5));
