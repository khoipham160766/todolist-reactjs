import React,{Fragment, useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import axios from "axios";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Todos = () => {
    const [todosState, settodosState]=useState([]);
    // Get request
    // componentDidMount(){

    // };
    useEffect(()=>{
        const config = {
            params: {
                _limit: 10
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos",config)
        .then(response=>settodosState(response.data));
    })
    const markComplete = id => {
        const newTodo= todosState.map(todo => {
            if(todo.id === id) todo.complete = !todo.complete;
            return todo;
        })
        settodosState(newTodo);
    };
    const deleteTodo = id => {
        // state array
        // const newTodo = todosState.filter(todo => {
        //     return todo.id !== id;
        // })
        // settodosState(newTodo);
        console.log(id);
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            console.log(response);
            settodosState(todosState.filter(todo=>{
                    return todo.id !== id;
            }))
        });
    }
    const AddTodoButton = title => {
        const newTodo =  {
            // id: uuidv4(),
            title,
            complete: false
        };
        axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then(response => {
            console.log(response.data)
            settodosState([...todosState, response.data])
        })
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