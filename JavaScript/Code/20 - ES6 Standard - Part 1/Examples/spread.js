
// Kopiranje niza

const originalNiz = [1,2,3,4,5,6,7,8,9];
const kopiraniNiz = [...originalNiz];

console.log(kopiraniNiz);

// Spajanje niza

const niz1 = [1,2,3];
const niz2 = [4,5,6];

const spojeniNiz = [...niz1, ...niz2];
console.log(spojeniNiz);

// kopiranje objekta
const originalObjekt = {
    ime: 'John',
    prezime: 'Doe',
    country: 'USA'
};

const klopiraniObjekt = {
    ...originalObjekt
};

console.log(klopiraniObjekt);


// Spajanje objekta
const objekt1 = {a: 1, b: 2};
const objekt2 = {b: 3, c: 4}; // property od drugo objekta će pobjediti
const spojeniObjekt = {...objekt1, ...objekt2};

console.log(spojeniObjekt);

const numebrs = [1,2,3];
const result = sum(...numebrs);
console.log(result); // output 6
