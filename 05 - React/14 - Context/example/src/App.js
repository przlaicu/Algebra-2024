import './App.css';
import Theme from './Components/ThemeContext/Theme';
import AuthUser from './Components/UserContext';

export default function App() {
  return (
    <div className="App">
      <h1>Context </h1>
      <AuthUser />
      <hr />
      <Theme />
    </div>
  );
}
