import React from 'react';

export default props => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
            style={{
                textDecoration: props.mapTodo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}>
            {props.mapTodo.todoItems}
        </div>
        <button onClick={props.onDelete}>X</button>
    </div>
)