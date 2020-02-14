import React, { Component } from 'react';


import './CreateComponents.css';
import { Header } from './Header';
import {Body2} from './Body'

class CreateCompoents extends Component {

    add(a , b){ 
        return a + b;
    }


    render() {
        const sum = (a,b) => a + b;

        return (
            <>
            <div className="App">
                <Header  text="passing data" num={5} myObj={{a:1,b:5}} myFucntion={(a,b)=> a + b} myFucntion2={sum} myArr ={[3,20,1]} myFucntion3={this.add}/>
            </div>
            <div>
                <Body2 />
            </div>
            </>
        );
    }
}

export default CreateCompoents;