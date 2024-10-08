
export default function Books() {

    const books = [
        {
            id: 1,
            bookName: '1984',
            author: 'George Orwell'
        },
        {
            id: 2,
            bookName: 'Pride and Prejudice',
            author: 'Jane Austin'
        },
        {
            id: 3,
            bookName: 'Hunger Games',
            author: 'John Doe'
        },
    ];

    return (
        <div>
            <h1>Books in library</h1>
            <div style={{ display: "flex", flexDirection: "row", listStyle: 'none' }}>
                {books.map(books =>
                    <Book key={books.id} name={books.bookName} author={books.author} />
                )}
            </div>
        </div>
    );

}

function Book(props) {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.author}</p>
            <button>Remove</button>
        </div>
    );

}