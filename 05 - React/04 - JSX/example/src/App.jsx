import './App.css';

export default function App() {
  
  const user = {
    firstName:'Homer',
    lastName:'Simpson',
    job: 'The Nuclear Safty Inspector',
    age: 68,
    empoloyed: true,
    spouse: {
      firstName: 'Marge',
      lastName: 'Simpson',
    },
    animals: [`Sanstas's Littel Helper `, `Snowball II`],
  };

  function checkLegalDrinkingAge(user) {
    if(user.age >= 21) {
      return `${user.firstName} is of legal drinking age.`;
    } else {
      return `${user.firstName} is not of legal drinking age. Please do not serve them alcoholic beverages`;
    }
  }

  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <h2>{` Hello: ${user.firstName} ${user.lastName}`} is age old {user.age} years old his job role is {user.job} and they are currentls {user.empoloyed ? `employed. Whoo` : `unemployed.`}</h2>
      <p>Our user has {user.animals.length} animal(s). They are {user.animals.join(', ')}.</p>
      <p>{checkLegalDrinkingAge(user)}</p>
      <p>Spouse: {user.spouse.firstName} {user.spouse.lastName}</p>
    </div>
  );
}
