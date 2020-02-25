import React from 'react';

export default props => (
    <div
        style={{
            textDecoration: props.mapTodo.complete ? "line-through" : ""
        }}
        onClick={props.toggleComplete}>
        {props.mapTodo.todoItems}
    </div>)