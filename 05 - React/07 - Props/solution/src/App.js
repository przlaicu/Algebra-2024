
import './App.css';
import { UserChildren, UserClass, UserFunction } from './Components';

export default function App() {
  
  const users = [
    { name: 'Ivan', years: 38},
    { name: 'Marko', years: 35},
    { name: 'Ana', years: 25},
]

  return (
    <div className="App">
      <UserClass
        name
        years 
      />
      <UserFunction />
      <UserChildren />
    </div>
  );
}

PropTypes = {
  name: PropTypes.string,
  years: PropTypes.number
}
