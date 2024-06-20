// brojevi = argumenti
function zbrajanje(...brojevi) {
    let rezultat = 0;

    for(let broj of brojevi) {
        rezultat = rezultat + broj;
    }
    return rezultat;
}

console.log(zbrajanje(1,2,3,4,5)); // 15

// Prikupljanje preostalih elemenata u nizu

const [prvi, drugi, ...ostali] = [1,2,3,4,5];
console.log(prvi);
console.log(drugi);
console.log(ostali);

// Destrukturirati objekat

const person = {
    firstName: 'John',
    age: 41,
    country: 'USA',
};

const { firstName } = person;
console.log(firstName);

const { age, ...rest } = person;
console.log(age);
console.log(rest);