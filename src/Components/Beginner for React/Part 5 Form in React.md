# Part 5 Form in React

For `checkbox` we use `checked` to get the value, and the listener still use `onChange`

using second param to locate the itme of obj:
```JavaScript
//this for all event.target.value
changeHandler = (event, nameField) => {
    this.setState({[nameField]: event.target.value})
}
<div><label>Name:</label> <input value={this.state.name} onChange={event => this.changeHandler(event, 'name')} /></div>

// for checkbox event.target.checked
changeHandler = (event, nameField, isCheckbox) => {
    this.setState({[nameField]:
                    isCheckbox ?
                    event.target.checked :    
                    event.target.value})
}
<div><label>is checked:</label> <input  type="checkbox" checked={this.state.isChecked } onChange={event => this.checkedHandler(event,'checkbox', true)} /></div>
```

if we want to get ride off the inline fucntion which it have passing the params in event listener. we can use `name ='name'` attribute in JAX
like:
```JavaScript
    changeHandler = (event, isCheckbox ) => {
        this.setState({ [event.target.name]:
                        isCheckbox ? 
                        event.target.checked:
                        event.target.value })
    }
<div><label>Name:</label> <input name="name"  value={this.state.name} onChange={this.changeHandler} /></div>
```

and also we can optimizing checkbox event lisetner by give the condition of `event.target.type` :
```JavaScript
    changeHandler = event => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({ [event.target.name]:
                        isCheckbox ? 
                        event.target.checked:
                        event.target.value })
    }
    <div><label>is checked:</label> <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.checkedHandler} /></div>
```