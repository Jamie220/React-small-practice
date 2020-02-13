import React, { Component } from 'react';

import logo from '../../logo.svg';
import './CreateComponents.css';



const Body = () => (
    <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" >
            Learn React
        </a>
    
) 


// const Body = () => {
//     return (
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer" >
//             Learn React
//         </a>
//     );
// }


// function Body (){
//     return(
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer" >
//             Learn React
//         </a>
//     );
// }

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
              </p>
            <Body />
            </header>
        )
    }

}


class CreateCompoents extends Component {
    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default CreateCompoents;