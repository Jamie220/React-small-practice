# Part 7 Todo list
### Objective
 1. add todo
 update state in the `<ToDoForm>` to get input value and passing it the father component `<TodoList>` and then using function `addTodo` to update the state of `<TodoList>` by using `...`
 ---
 2. display todo
using `map()` to go through each item of todo array.
 the mistake I made which shows below:
 **correct**
 ```JavaScript
    this.state.todos.map(todo => (<div>...</div>))
    // or
    this.state.todos.map(todo => { return <div>...</div>})
 ```
 ---
 3. cross off todo
 to create a new component `<Todo>` to simply passing todo data which can help us style it
 ---
 4. show number of active todos
 5. fillter all/active/complete
 by updating the state of `todoToShow` with a `string` -- `all`, `active` and `completed`.
 > Notice: if you need to use a param passing to a function as component's props, you need to use in-line function. for example:
 ```JavaScript
 <Todo onSubmit = {()=> this.submithandler(todo.id)}>
 ```
 ---
 6. delete todo
 7. delete all complete
   * only show if at least one is complete
 using `filter()` when I press a button then will call function `handleOnDelete()` this function will **only** filter out 0the todos which is not equal to the todo I click (by using id to check).
 ```JavaScript 
// delete one item
    handleOnDelete = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
 ```
  ```JavaScript 
// delete all items
    removeAllCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }
 ```
 --- 
 8. button to toggle all on/off
 combine the state `toggleAllCompleted` and `complete` together, when I press the button *toggle all complete:* initially `toggleAllCompleted` is `ture` and update state `complete` === `toggleAllCompleted` === `ture`, then set `toggleAllCompleted` to `false`(also `!this.state.toggleAllCompleted`)
 ---
 9. Optimize `this.setState()`
`this.setState()` are asynchronous so passing a param to get correct value, if not do that, sometimes you can run into rick codition, so better to using `state` as param to passed in a function.
For example:
```JavaScript
    removeAllCompleted = () => {
        this.setState(state=>({
            todos: state.todos.filter(todo => !todo.complete)
        }))
    }
```