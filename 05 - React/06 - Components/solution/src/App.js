import { Component } from 'react';
import './App.css';

export default function App() {
  return (
    <div >
      <PrikaziText />
      <PrikaziText2 />

    </div>
  );
}

function PrikaziText() {
  return (
    <div>
      <h1>Hello Africa again iz App komponente</h1>
    </div>
  );
}

class PrikaziText2 extends Component {
  render() {
    return <h2>Ovo je opet Hello Africa</h2>;
  }
}