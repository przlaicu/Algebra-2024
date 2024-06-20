const chef = {
    prepareDish(dishName) {
        // Implement the chef's logic
        console.log(`Cheff is prepairng ${dishName} please wiat :) `);
    },
    
};

const waiter = {
    takeOrder(tableNumber, dishName) {
        // Implement the waiter's logic for taking an order
        console.log(`Waiter has taken the order for table ${tableNumber} and for Dish Name ${dishName} `);
    },
    serveDish(tableNumber, dishName) {
        // Implement the waiter's logic for serving a dish
        console.log(`Waiter is serving Dish ${dishName} for table ${tableNumber}`);
    },
};

function placeOrder(tableNumber, dishName, chef) {
    // Implement the order placement logic
    waiter.takeOrder.call(waiter, tableNumber, dishName);
    chef.prepareDish.call(chef, dishName);
    waiter.serveDish.call(waiter, tableNumber, dishName);
}

// Create the partially applied function orderSteak using bind

// Test the functionality
placeOrder(1, 'Steak', chef);
placeOrder(2, 'Pasta', chef);

// Use the partially applied orderSteak function0
var orderStake = placeOrder.bind(null, 'Stake');
orderStake(3, chef)
