import './App.css';
import Hooks from './Components/Hooks/Hooks';
import Car from './Components/State/Car';
import Counter from './Components/State/Counter';
import Yoda from './Components/State/Yoda';
import Events from './Components/Events/Events';
import Colors from './Components/Events/Colors';

export default function App() {
  return (
    <div>
      <Yoda />
      <hr />
      <Car />
      <hr />
      <Counter />
      <hr />
      <Hooks />
      <hr />
      <Events />
      <hr />
      <Colors />
    </div>
  );
}