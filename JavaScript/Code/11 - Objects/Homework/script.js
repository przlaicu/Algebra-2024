
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

function reedBookStatus(library) {
    console.log('Knjige koje ste pročitali');
    console.log('-----------------------------------------------------------');

    for (var i = 0; i < library.length; i++) {
        if (library.readingStatus) {
            console.log(`Knjiga ${library.title} od autora ${library.author} je pročitana`);
        } else {
            console.log(`Knjiga  ${library.title}  od autora ${library.author} nije pročitana`);
        }
    }
}


console.log(reedBookStatus(library));
