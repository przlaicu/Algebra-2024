
document.querySelector('button').addEventListener('click', () => {
    const userId = prompt('Kojeg user će mo brisati');
    const apiURL = `https://api.edu.skuflic.com/users/${userId}`;

    const requestOptions = {
        method: 'DELETE',
        headers: {
            // Include any required headers
        },
    };

    fetch(apiURL, requestOptions).then(res => {
        if(!res.ok) {
            throw new Error('Network response not ok');
        }
        alert(`User width ID ${userId} was deleted`);
    })
    .catch((error) => {
        console.log('Error', error);
    });
});