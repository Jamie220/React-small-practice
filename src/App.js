import React from 'react';



import './App.css';
import MyForm from './Components/BeginnerForReact/MyForm';
import ValiationForm from './Components/BeginnerForReact/ValiationForm';
import FetchRandomUsers from './Components/BeginnerForReact/FetchRandomUsers';
import TodoList from './Components/BeginnerForReact/TodoList';
import ReactHooksPractice from './Components/ReactHooksPractices/ReactHooksPractices';

// import CreateCompoents from './Components/Beginner for React/CreateComponents';
// import { Counter } from './Components/Beginner for React/Counter';
// import ImageSlider from './Components/Beginner for React/ImageSlider';


class App extends React.Component {

  state = {
    isVisiable: false
  };

  visiableHandler = () => {
    this.setState(state =>({ isVisiable: !state.isVisiable }))
  }

  render() {
    const bottonText = this.state.isVisiable ? 'HIDE (Beginner For React)' : 'SHOW (Beginner For React)'
    // const visiableCounter = <div className ={!this.state.isVisiable? "visiable" : "hidden"}> 
    // <Counter countNumber={0} /></div>
    // const slider = this.state.isVisiable ? <ImageSlider /> : visiableCounter
    // const visiableBeginnerCourseHaader = <div className={!this.state.isVisiable ? "visiable" : "hidden"}>
    //       <h3>Beginner For React</h3>
    // </div>

    const visiableBeginnerCourse = <div className={!this.state.isVisiable ? "hidden" : "visiable"}>
          <MyForm />
          <ValiationForm />
          <FetchRandomUsers />
          <TodoList />
          
    </div>

    return (
      // <div>
      //   {/* <CreateCompoents />
      //   {/* <Counter countNumber={4}/> */}
      //   {slider}
      // <button onClick={this.visiableHandler}>{bottonText}</button> */}

      // </div>
      <div>
        <section className="App">
          {/* {visiableBeginnerCourseHaader} */}
          <button onClick={this.visiableHandler}>{bottonText}</button>
          {visiableBeginnerCourse}
        </section>
        <section>
          <ReactHooksPractice />
        </section>
      </div>

    );
  }
}

export default App;
