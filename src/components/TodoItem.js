import React from "react";

const TodoItem = props => {
    const todo=props.todoProps;
    const markComplete=props.funcTodo;
    const DeleteTodo = props.funcDelete;
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none',
        marginLeft: '10px'
    }
    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    const checkboxStyle = {
        marginRight: '10px'
    }
    return (
       <p style={todoItemStyle}>
           <input style={checkboxStyle} type='checkbox' onChange={markComplete.bind(this, todo.id)} checked={todo.completed}></input>
           {todo.title}
           <button style={deleteButtonStyle} onClick={DeleteTodo.bind(this, todo.id)}>Delete</button>
       </p>
    )
}

export default TodoItem;