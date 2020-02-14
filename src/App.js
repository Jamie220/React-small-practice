import React from 'react';



import './App.css';
import CreateCompoents from './Components/Beginner for React/CreateComponents';
import { Counter } from './Components/Beginner for React/Counter';
import ImageSlider from './Components/Beginner for React/ImageSlider';


function App() {
  return (
    <div>
      <CreateCompoents />
      <Counter countNumber={4}/>
      <ImageSlider />

    </div>
  );
}

export default App;
