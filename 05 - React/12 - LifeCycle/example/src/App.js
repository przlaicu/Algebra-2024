import './App.css';
import Exercise from './Components/Exercise';
import Garage from './Components/Garage';
import Lifecycle from './Components/Lifecycle';
import Lists from './Components/Lists';

export default function App() {
  return (
    <div>
      <Lifecycle />
      <hr />
      <Lists />
      <hr />
      <Garage />
      <hr />
      <Exercise />
      <hr />
      <Exercise />
    </div>
  );
}
