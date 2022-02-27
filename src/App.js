import React from 'react';
import Hello from './Components/Hello';
import {useState} from 'react';
import './App.css';
const App = (user) => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <Hello name = "Prajwal" Power = "Superman"/>
      <Hello name = "Aman" Power = "Batman"/>
      <Hello name = "Rishabh" Power = "Ironman"/>
      <p>I am cumming {count} times</p>
      <button onClick={() => setcount(count + 1)}>Lick me</button>
    </div>
  );
}

export default App