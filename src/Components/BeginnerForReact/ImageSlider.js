import React from 'react';


export default class ImageSlider extends React.Component {

    state ={
        images:[
            "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
            "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
            "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
            "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg"
        ],
        index: 0
    }

    clickNextHandler = () =>{
        this.setState({
            index: this.state.index + 1
        })
    }

    render(){
        return(
            <>
                <button onClick={()=>this.setState({index: this.state.index - 1})}>PREV</button>
                <img
                style={{width:'100px', height:'100px'}} 
                src={this.state.images[this.state.index]} alt="images"/>
                <button onClick={this.clickNextHandler}>NEXT</button>
            </>    
        );
    };
}