import './App.css';

import Task2  from './Components/Task2';

export default function App() {
  
  const var1 = 'Ivan';

  const person = {
    firstName: 'Luka',
    lastName: 'Horvat',
  }
  
  function checkLastName(person) {
    if(person.lastName === 'Horvat') {
      return 'Hello, friend';
    } else {
      return 'Hello stranger';
    }
  }

  return (
    <div>
      <h1>{person.firstName} {person.lastName}</h1>
      <p>Provjera korisnika: {checkLastName(person)}</p>
      <Task2/>
    </div>
  );
}
