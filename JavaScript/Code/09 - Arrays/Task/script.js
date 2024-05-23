var names = ['John', 'Jane', 'Bob',, 'Mike'];

// 1 zadatak
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('-------------------------------------------------------')

// 2 Zadatak
names.push('Milan');
console.log(names);


console.log('-------------------------------------------------------')

// 3 zadatak
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
    if(names[i] == 'Jane') {
        break;
    }
}

console.log('-------------------------------------------------------')

// 4 zadatak

for(var i = 0; i < names.length; i++) {
    if(names[i] === undefined) {
        names.pop(names[i]);
        continue;
    }
    console.log(names[i]);
}

console.log('-------------------------------------------------------')

// 5 Zadatak

var parniNUmbers = [];

for(var i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        parniNUmbers.push[i];
        continue;
    }

    console.log(parniNUmbers);
}