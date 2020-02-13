import React, { Component } from 'react';

import logo from '../../logo.svg';
import './CreateComponents.css';



const Body = (props) => (
    <div>
        {props.title}        
    </div>
    
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
                <div>{this.props.text}</div>
                <div>{this.props.num}</div>
                <div>{this.props.myObj.a}</div>
                <div>{JSON.stringify(this.props.myObj)}</div>
                <div>{this.props.myFucntion(3,7)}</div>
                <div>{this.props.myFucntion2(8,7)}</div>
                <div>{this.props.myArr[1]}</div>
                <div>{this.props.myFucntion3(20,7)}</div>
            <Body title="this is my body"/>
            </header>
        )
    }

}


class CreateCompoents extends Component {

    add(a , b){ 
        return a + b;
    }


    render() {
        const sum = (a,b) => a + b;

        return (
            <div className="App">
                <Header  text="passing data" num={5} myObj={{a:1,b:5}} myFucntion={(a,b)=> a + b} myFucntion2={sum} myArr ={[3,20,1]} myFucntion3={this.add}/>
            </div>
        );
    }
}

export default CreateCompoents;