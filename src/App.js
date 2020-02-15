import React from 'react';



import './App.css';
import CreateCompoents from './Components/Beginner for React/CreateComponents';
import { Counter } from './Components/Beginner for React/Counter';
import ImageSlider from './Components/Beginner for React/ImageSlider';


class App extends React.Component {

  state = {
    isVisiable: true
  };

  visiableHandler = () => {
    this.setState({isVisiable : !this.state.isVisiable})
  }

  render () {
    const bottonText = this.state.isVisiable ? 'HIDE' : 'SHOW';
    const visiableCounter = <div className ={!this.state.isVisiable? "visiable" : "hidden"}> <Counter countNumber={0} /></div>
    const slider = this.state.isVisiable ? <ImageSlider /> : visiableCounter

  return (
    <div>
      <CreateCompoents />
      {/* <Counter countNumber={4}/> */}
      {slider}
    <button onClick={this.visiableHandler}>{bottonText}</button>

    </div>
  );
  }
}

export default App;
