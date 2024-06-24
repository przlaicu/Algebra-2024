// general

(function storage() {

    localStorage.setItem('user', 'Milan Kutle');
    const user = localStorage.getItem('user');

    document.getElementById('user').innerHTML = user;

    sessionStorage.setItem('session', crypto.randomUUID());

    localStorage.setItem('age', 42);


    // localStorage.clear();

})();

(function cookies() {
    document.cookie = 'username= Milan Kutle;expires=Thu, 31 Dec 2024 12:00:00 UTC;path=/;Secure;';
    console.log('Cookie is ' + document.cookie)
})();