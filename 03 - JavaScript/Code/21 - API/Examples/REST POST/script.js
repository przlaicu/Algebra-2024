
const apiUrl = 'https://api.edu.skuflic.com/users';

const requestData = {
    name: 'Hell Africa',
    birthDay: '12/12/1990',
    address: {
        street: 'Vukovarska 24',
        city: 'Zagreb',
        zip: '10000',
        country: 'Hrvatska'
    },
    email: 'mail@mail.hr',
    phone: '+385912424565',
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
};

document.querySelector('button').addEventListener('click', () => {

    fetch(apiUrl, requestOptions)
    .then(response => {
        if(!response.ok) {
            throw new Error('Network respoinse not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log('Response data: ' , data)
    });
});