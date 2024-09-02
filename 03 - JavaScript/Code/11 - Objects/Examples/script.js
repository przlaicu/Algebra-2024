
// Object litera
var person = {
    firstName: 'Milan',
    lastName: 'Kutle',
    id: 12345,
    fullName: function() {
        return this.firstName + ' ' + this.lastName; // mora ići this da javascript zna da se odnosi na propertie iz objekta
    },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);

console.log(person.fullName());

// create object using keyword
var myCar = new Object();
console.log(myCar); // {}

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

// Anouther object
var phone = {
    brand: {
        manufacturrer: 'Apple',
        model: 'iPhne 13 Pro',
    },
    color: ['Sierra Blue', 'Silver', 'Gold', 'Whine'],
    price: 999,
    display: '6.1-inch display',
    qty: 184,
    checkStock: function() {
        if(this.qty > 0) {
            return true;
        } else {
            return false;
        }
    },
};

console.log(phone.brand.model);
console.log(`The phone you have selected ${phone.brand.model} is ${phone.checkStock() ? 'aviable for purchase' : 'Not aviable for purchuase. Sorry'}`);

// slanje na server --> promjena u JSON

var myPhoneJson = JSON.stringify(phone);
console.log(myPhoneJson);


// conver json to object
var myJson = '{"brand":{"manufacturrer":"Apple","model":"iPhne 14 Pro"},"color":["Sierra Blue","Silver","Gold","Whine"],"price":1099,"display":"6.1-inch display","qty":100}';

var myObject = JSON.parse(myJson);
console.log(myObject);