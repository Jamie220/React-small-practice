import React from 'react';
import '../../App.css';

class MyForm extends React.Component {

    state = {
        name: '',
        email: '',
        isChecked: false,
        selection: 'Mr',
    };

    nameChangeHandler = event => {
        this.setState({ name: event.target.value })
    }

    emailChangeHandler = event => {
        this.setState({ email: event.target.value })
    }

    checkedHandler = e => {
        this.setState({ isChecked: e.target.checked })
    }

    selectionHandler = e => {
        this.setState({selection: e.target.value})
    }

    submitHandler = () => {
        console.log(this.state)
    }
    render() {

        return (
            <div className="App">
                <div><label>Name:</label> <input type="name" value={this.state.name} onChange={this.nameChangeHandler} /></div>
                <div><label>email:</label> <input type="email" value={this.state.email} onChange={this.emailChangeHandler} /></div>
                <div><label>is checked:</label> <input type="checkbox" checked={this.state.isChecked} onChange={this.checkedHandler} /></div>
                <div>
                    <select value={this.state.selection} onChange={this.selectionHandler}>
                        <option>Mr.</option>
                        <option>Miss.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                    </select>
                </div>
                <button onClick={this.submitHandler}>Submit</button>
            </div>
        );
    }
}
export default MyForm;