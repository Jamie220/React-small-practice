import React from 'react';
import '../../App.css';

class MyForm extends React.Component {

    state = {
        name: '',
        email: '',
        isChecked: false,
        selection: 'Mr',
        comments: ''
    };

    changeHandler = event => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({ [event.target.name]:
                        isCheckbox ? 
                        event.target.checked:
                        event.target.value })
    }


    checkedHandler = event => {
        this.setState({ isChecked: event.target.checked })
    }


    submitHandler = event => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {

        return (
            <form className="App" onSubmit={this.submitHandler}>
                <div><label>Name:</label> <input name="name"  value={this.state.name} onChange={this.changeHandler} /></div>
                <div><label>email:</label> <input name="email" value={this.state.email} onChange={this.changeHandler} /></div>
                <div><label>is checked:</label> <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.checkedHandler} /></div>
                <div>
                    <select name="selection" value={this.state.selection} onChange={this.changeHandler}>
                        <option>Mr.</option>
                        <option>Miss.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                    </select>
                </div>
                <div>
                    <textarea name="comments"value={this.state.comments} onChange={this.changeHandler} />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}
export default MyForm;