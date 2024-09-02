
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true,
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false,
    },
];

function reedBookStatus(obj) {
    console.log('Knjige koje ste pročitali');
    console.log('-----------------------------------------------------------');

    for (var i = 0; i < obj.length; i++) {
        if (obj.readingStatus) {
            console.log(`Knjiga ${obj[i].title} od autora ${obj[i].author} je pročitana`);
        } else {
            console.log(`Knjiga  ${obj[i].title}  od autora ${obj[i].author} nije pročitana`);
        }
    }
}


console.log(reedBookStatus(library));
