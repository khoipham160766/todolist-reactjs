import React,{Fragment, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Todos = () => {
    const [todosState, settodosState]=useState([]);
    // const allTodos= [];
    // for (let todo of todosState){
    //     allTodos.push(<p>{todo}</p>);
    // }
    const markComplete = id => {
        const newTodo= todosState.map(todo => {
            if(todo.id === id) todo.complete = !todo.complete;
            return todo;
        })
        settodosState(newTodo);
    };
    const deleteTodo = id => {
        const newTodo = todosState.filter(todo => {
            return todo.id !== id;
        })
        settodosState(newTodo);
    }
    const AddTodoButton = title => {
        const newTodo = [...todosState, {
            id: uuidv4(),
            title,
            complete: false
        }];
        settodosState(newTodo);
    }
    return (
        <Fragment>
            <AddTodo addTodoFunc={AddTodoButton} />
            {todosState.map(todo => {
                return <TodoItem key={todo.id} todoProps={todo} funcTodo={markComplete} funcDelete={deleteTodo} />
            })}
        </Fragment>
        
    )
    
}

export default Todos