import './App.css';
import ColorPicker from './Components/ColorPicker';
import Counter from './Components/Counter';
import TaskManager from './Components/TaskManager';

export default function App() {
  return (
    <div>
      <Counter />
      <hr></hr>
      <ColorPicker />
      <hr></hr>
      <TaskManager />
    </div>
  );
}
