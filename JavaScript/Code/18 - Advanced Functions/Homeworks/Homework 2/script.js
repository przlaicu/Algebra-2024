
function stvoriRacun(pocetniIznos) {
    var trenutniIznos = pocetniIznos;

    return {
        name: 'Africa',
        uplati: function(iznos) {
            trenutniIznos += iznos;
            return `Stanje računa korisnika ${this.name} je  ${trenutniIznos} EUR`;
        },

        isplati: function(iznos) {
            if(iznos <= trenutniIznos) {
                trenutniIznos -= iznos;
                return `Stanje računa korisnika ${this.name} je  ${trenutniIznos} EUR`;;
            } else {
                return `Korisnik ${this.name} nema peneza na računu za isplatu buhahaha`
            }
        }
    };
}

const mojRacun = stvoriRacun(100);
console.log(mojRacun.uplati(50));

console.log(mojRacun.isplati(50));