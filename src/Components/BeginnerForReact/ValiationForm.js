import React from 'react';

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError:"",
    emailError:"",
    passwordError:"" 
}

class ValiationForm extends React.Component {

    state = initialState;


    isValiate = () => {
        let emailErrors = '';

        if(!this.state.email.includes("@")){
            emailErrors = ' invalid email';
        }

        if(emailErrors) {
            this.setState({emailError:emailErrors})
            return false
        }

        return true
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    submitHandler = (event) => {
        event.preventDefault();
        const isValiate = this.isValiate();
        if (isValiate) {
            console.log(this.state);
            this.setState(initialState)
        }
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input name='name' placeholder='YOUR NAME' value={this.state.name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input name='email' placeholder='YOUR EMAIL ADDRESS' value={this.state.email} onChange={this.changeHandler} />
                        <div>{this.state.emailError}</div>
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='PASSWORD' value={this.state.password} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default ValiationForm;