# Partical React Hooks

### overall:boom:

you can't nest hooks inside loops, conditions, nested functions.

### useState :rocket:

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