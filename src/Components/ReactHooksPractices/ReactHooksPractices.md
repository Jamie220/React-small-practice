# Partical React Hooks

### overall:boom:

you can't nest hooks inside loops, conditions, nested functions.

### useState( ) :rocket:

`useState(()=>10) // computation very expensive`

correct one: 
```Javascript
function expensiveInitialState () {
    return 10;
}

// only call on first time not on every single time the component renders

const ReactHooksPractice = () => {

    useState(() => expensiveInitialState)

    return(
    <div >
    ...
    </div>
    )
}
export default ReactHooksPractice;
```

using inline function in `setCount()` will aviod having two updates happen on same time, there is example below:
```JavaScript
<button onClick={() => setCount(currentState => currentState + 1)}>+</button>
```

### useEffect( ) :cat:

Everytime the component get render or re-render, useEffect() will get to call.

kind of replace `componentDidMount()` and `componentWillUnMount()`

```javascript
//only will get to call when change the password
useEffect(()=>{
    console.log("render")
}, [values.password])
//second parameter is called the dependency array that you can pass in
```
if didn't put value in `[ ]` so `useEffect()` only called once on the beginning. 

**clean up function:**
```javascript

useEffect(()=>{
    console.log("render")

    return () => {
        console.log("unmount")
    }
}, [values.password])

```