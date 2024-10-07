
export default function Animals() {

    const animals = ['Cat', 'Cow', 'Mouse', 'Horse'];

    const animal = animals.map(animal => <li key={crypto.randomUUID()}>{animal}</li>)

    const addAnimal = prompt('What animal you want ?');

    return (
        <div>
            <h1>Hello Africa</h1>
            <li>
                {animal}
            </li>
            <button onClick={addAnimal}>Add new</button>
        </div>
    );

}
