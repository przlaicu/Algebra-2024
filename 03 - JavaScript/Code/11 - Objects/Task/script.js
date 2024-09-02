let car = {

    make: 'Ford',
    model: 'Mustang',
    year: 1989,
    isSportCar: true,
    age: function() {
        var yearsOld = (new Date().getFullYear()) - this.year;
        return yearsOld;
    },
    speed: 250,
};

console.log(car.make);
console.log(car.model);
console.log(car.year);

console.log(`This is car ${car.make}, and model is ${car.model}`)

console.log(car.age());






