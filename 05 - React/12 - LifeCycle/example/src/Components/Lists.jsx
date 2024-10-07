
export default function Lists() {
    
    const numbers = [1, 2, 3, 4, 6, 8];

    const listItem = numbers.map((number) => <li key={crypto.randomUUID()}>{number}</li>)
    
    return(
        <div>
            <h1>Hello Africa again (Lists)....</h1>
            <ul>
                {listItem}
            </ul>
        </div>
    );
}