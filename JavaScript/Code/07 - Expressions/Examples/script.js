
// If, Else
var age = 25;

if (age > 18) {

    console.log('User is legal drinking age')

} else {
    console.log('User is not leghal drinking age. DO NOT SERVE HIM')
}

// If, else if, else

var gender = 'Male';

if(gender == 'Male') {
    console.log('User is male');
} else if (gender == 'Femail') {
    console.log('User is femail');
} else {
    console.log('User gender unknown');
}

// If, Else with range

var customerAge = 17;

if (customerAge >= 18 && customerAge <= Infinity) {
   console.log('User is legal drinkige age');
} else {
   console.log('WARNING: This user is not of legal drinkign age. DO NOT SERVE HIM'); 
}


// Switch

var fruits = 'Mangoes';

switch(fruits) {
    case 'Oranges' :
        console.log('User has boughed oranges');
        break;
    
    case 'Mangoes' :
        console.log('User hase boughed mangoes');
        break;
    
    case 'Papayas':
        console.log('User has bought papayas');
        break;
    
    default:
        console.log('I have no idea what user has boughed');
        break;
}

// starting value iz 0 witch reprezents in our (switch) case sunday
console.log(new Date().getDay());

var date = new Date().getDay();

switch(date) {
    case 0 :
        console.log('today is Sunday');
        break;
    case 1 :
        console.log('today is Monday');
        break;
    case 2 :
        console.log('today is Tuesday');
        break;
    case 3 :
        console.log('today is Wensday');
        break;
    case 4 :
        console.log('today is Thursday');
        break;
    case 5 :
        console.log('today is Freday');
        break;
    case 6 :
        console.log('today is Saturday');
        break;
}

// For loop

/*
// for(var i = 1; i <= 10; i++) {

//     console.log('Current counter is ' + i);

// }
*/

for(var i = 1; i < 3; i++) {
    console.log('Current counter is i ' + i);

    for(var j = 1; j < 5; j++) {
    console.log('Current counter is j ' + j);
    }
}

/*
 ctrl + c + k --> comment

 ctrl + c + u --> uncomment
*/

// Do while

var count = 0;

do {
    // Do napravi ovo kod ispod
    console.log(count);
    count++; // povećaj za 1
}while(count < 10); // dokle god je counter manji od 10



