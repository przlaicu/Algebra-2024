
export default function Garage() {
    const cars = [
        {
            id: 1,
            brand:
            {
                name: "BMW",
                model: "M5",
                year: 2022,
            },
            sodout: true,
            colors: ["Blue", "Green", "Red"]
        },
        {
            id: 2,
            brand:
            {
                name: "Mercedes",
                model: "Maybach",
                year: 2010,
            },
            sodout: false,
            colors: ["Lanavder", "Yellow", "Black"]
        },
        {
            id: 3,
            brand:
            {
                name: "Porshe",
                model: "Ferrari",
                year: 2001,
            },
            sodout: true,
            colors: ["White", "Red", "SpaceGrey"]
        }
    ];

    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map(car =>
                    <Car key={car.id} brand={car.brand.name} model={car.brand.model} year={car.brand.year} colors={car.colors}/>
                )}
            </ul>
        </div>
    );

    function Car({ brand, model, year, colors }) {
        return (
            <>
               <li>
                    I'am a {brand} {model} from {year}.
                </li>
                Aviale Colors are:
                <ul>
                    {colors.map(color => <li color={crypto.randomUUID()}>{color}</li>)}
                </ul>
            </>

        );
    }
}