// https://api.edu.skuflic.com/billing

/*
const response = await fetch('https://api.edu.skuflic.com/billing');
const cardData = await response.json();
let dataToDisplay = '';

cardData.forEach(element => {
    dataToDisplay = cardData.cardholder_name;
    console.log(dataToDisplay);
});

*/

async function getCardData() {
    
    const response = await fetch('https://api.edu.skuflic.com/billing');
    const cardData = await response.json();

    var dataToReturn[];

    for(var i = 0; i < cardData.lenght; i++) {
        dataToReturn = cardData.cardholder_name;
    }

    return dataToReturn;
}


// prikaz podataka
function displayData(cardData) {
    const data = document.getElementById('data');

    if(cardData) {
        let dataDisplay = data.innerHTML 
        `
            <td>${data.cardholder_name}</td>
        `
    }

    return dataToDisplay;

}

async function main() {

    let cardData = getCardData();

    if(!cardData) {
        cardData = getCardData();
        displayData(cardData);
    } else {

    }
}

main();
