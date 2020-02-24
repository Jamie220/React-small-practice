import React from 'react';
import ToDoForm from './ToDoForm';

    /*
        1. add todo
        2. display todo
        3. cross off tod
        4. show number of active todos
        5. fillter all/active/complete
        6. delete todo
        7. delete all complete
            7.1 only show if at least one is complete
        8. button to toggle all on/off
    */

export default class TodoList extends React.Component {

    state = {
        todos: []
    }

    addTodo = todo =>{
        const newTodos = [todo, ...this.state.todos];
        this.setState({todos: newTodos})
    }

    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <ToDoForm onSubmit={this.addTodo}/>
                {/* {JSON.stringify(this.state.todos)} */}
                {this.state.todos.map(todo =>(
                    <div key={todo.id}>{todo.todoItems}</div>
                )
                )}
            </div>
        );
    }
}