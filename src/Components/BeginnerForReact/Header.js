import React from 'react';
import Body from './Body';

import logo from '../../logo.svg';


export class Header extends React.Component {
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
