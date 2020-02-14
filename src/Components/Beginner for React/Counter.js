import React from 'react';



export class Counter extends React.Component {
    
    constructor(props){
        super(props)
    
        // this.state ={
        //     count: 0  
        // };
        // if you want to using props to passing data from another components you have to ues constructor()
        this.state ={
            count: props.countNumber
        }

    };
    //only for 
    // state ={
    //     count: 0
    // };
    // increaseHandler(){
    //     //you have to bind this function if you didn't use arrow function
    // }    

    increaseHandler = () =>{
            this.setState({
                count: this.state.count + 1
            })        
        }

    decreaseHandler = () =>{
        this.setState({
            count: this.state.count - 1
        })        
    }    
    render() {
     

        return (
            <div>
                <h2>Count Nubmer: {this.state.count}</h2>
                <button onClick={this.increaseHandler}>increasing</button>
                <button onClick={this.decreaseHandler}>Decreseing</button>

            </div>
        )
    }

}
