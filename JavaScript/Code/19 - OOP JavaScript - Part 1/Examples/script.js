
class Foo {
    #private = 123;
    constructor() {
        console.log(this.#private);
    }
}

const newFoo = new Foo();
// console.log(newFoo.#private); // ne radi jer je privatna varijabla....

// OverLoading

class Bird {
    fly() {

    }
}

class Pinguin extends Bird {
    fly() {
        throw Error ('Pinguins can not fly')
    }
}

var pinguin = new Pinguin();
console.log(pinguin.fly());

// Super

class Foo2 {
    constructor(name) {
        this.name = name;
    }

    getNameSeparator() {
        return '-';
    }
}

class FooBar extends Foo2 {
    constructor(name, index) {
        super(name);
        this.index = index;
    }

    getFullName() {
        return this.name + super.getNameSeparator() + this.index;       
    }
}

var firstFooBar = newFoo('Milanče', 1);
console.log(firstFooBar.name);
console.log(firstFooBar.getFullName());
