import React from 'react';



import './App.css';
import CreateCompoents from './Components/Beginner for React/CreateComponents';
import { Counter } from './Components/Beginner for React/Counter';


function App() {
  return (
    <div>
      <CreateCompoents />
      <Counter countNumber={3}/>

    </div>
  );
}

export default App;
