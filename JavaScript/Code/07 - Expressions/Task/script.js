

var i = 2;

while(i < 20) {
    i++;
    if(i % 9 === 0) {
        continue;
    }
    console.log('Broj ' + i + ' nije djeljiv sa 9');
} 