
// Dark mode example

const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = 'light';
const btn = document.querySelector('#theme-switcher');

// Initi function

(function init() {
    let storedMode = sessionStorage.getItem('mode');

    if(!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DEFAULT_MODE);
    }

    // Poziv Funkcije koja mijenja text / klasu
    setMode(storedMode);
})();


// Function to change text / class
function setMode(mode = DEFAULT_MODE) {

    if(mode === DARK_MODE) {
        btn.innerHTML = SUN;
        document.body.classList.add(DARK_MODE)

    } else if (mode === LIGHT_MODE) {
        btn.innerHTML = MOON;
        document.body.classList.remove(DARK_MODE)
    }
}

// Event listener for button
btn.addEventListener('click', function () {
    let mode = sessionStorage.getItem('mode');
    if(mode) {
        let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setMode(newMode);
        sessionStorage.setItem('mode', newMode);
    }
});
