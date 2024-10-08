import './App.css';
import ClassExample from './Components/ClassExample';
import FunctionalExample from './Components/FunctionalExample';
import Solution from './Components/Splution';

export default function App() {
  return (
    <div className="App">
        <ClassExample />
        <hr></hr>
        <FunctionalExample />
        <hr></hr>
        <Solution />
    </div>
  );
}
