import React from 'react';
import shortid from 'shortid';

export default class ToDoForm extends React.Component {

    state = {
        todoItems: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmitTodos({
            id: shortid.generate(),
            todoItems: this.state.todoItems,
            complete: false
        });
        //set empty string after submit 
        this.setState({todoItems:""})
    }

    render() {
        return (

            <div style={{ textAlign: 'center' }}>
                <form onSubmit={this.submitHandler}>
                    <input
                        name='todoItems'
                        value={this.state.todoItems}
                        onChange={this.handleChange}
                        placeholder="add to do list here..."
                    />
                    <button onClick={this.submitHandler}>+</button>
                </form>
            </div>

        );
    }
}