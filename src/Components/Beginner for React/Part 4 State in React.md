# State in React.js

State allows you store your value and change it over the time.

using `arrow function` to bind the `function` to access `this` property 

if you want to using props to passing data from another components you have to ues constructor(props)

shallow merge: you can't go deeper, it only can effect one level. 

`setState()` is asynchronous -- the value of the state dose not immediately change after calling this function. but it has a callback fucntion for example:
```JavaScript  
this.setState(
    {value:this.state.value + 1}, ()=>{
    console.log(this.state)
})
```