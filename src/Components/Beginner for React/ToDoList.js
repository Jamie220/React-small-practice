import React from 'react';
import ToDoForm from './ToDoForm';
import Todo from './Todo'
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
        todos: [],
        todoToShow: "all"
    };

    addTodo = todo => {
        const newTodos = [todo, ...this.state.todos];
        this.setState({ todos: newTodos })
    }

    toggleComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    //supose to update
                    return {
                        id: todo.id,
                        todoItems: todo.todoItems,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            }
            )
        })
    }
    updateTodoToshow = s => {
        this.setState({ todoToShow: s })
    }
    handleOnDelete = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeAllCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    render() {
        let todos = []
        if (this.state.todoToShow === "all") {
            todos = this.state.todos
        } else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete)
        }


        return (
            <div style={{ textAlign: 'center' }}>
                <ToDoForm onSubmitTodos={this.addTodo} />
                {/* {JSON.stringify(this.state.todos)} */}
                {todos.map(todo => {
                    return <Todo
                        key={todo.id}
                        // text={todo.todoItems}
                        mapTodo={todo}
                        onDelete={() => this.handleOnDelete(todo.id)}
                        toggleComplete={() => this.toggleComplete(todo.id)} />
                }
                )}
                <div>Todos left: {this.state.todos.filter(todo => todo.complete).length}</div>
                <button onClick={() => this.updateTodoToshow("all")}>all</button>
                <button onClick={() => this.updateTodoToshow("active")}>active</button>
                <button onClick={() => this.updateTodoToshow("complete")}>complete</button>
                {/*or can use some: this.state.todos.some(todo=> todo.complete)*/}
                {this.state.todos.filter(todo => todo.complete).length ?
                    (<div>
                        <button onClick={this.removeAllCompleted}>Remove all completed</button>
                    </div>)
                    : null
                }
            </div>
        );
    }
}