import React,{useState} from "react";

const AddTodo = props => {
    const addTodo=props.addTodoFunc;
    const [Title, setTitle]= useState('');
    const AddTodoStyle = {
        display: 'flex'
    }
    const InputStyle = {
        flex: '10',
        padding: '5px'
    }
    const changeTitle = event =>{
        setTitle(event.target.value);
    }
    const addSingleTodo = event => {
        event.preventDefault();
        if(Title !== ''){
            addTodo(Title);
            setTitle('');
        }
    }
    return (
        <form style={AddTodoStyle} onSubmit={addSingleTodo}>
            <input type="text" name="title" placeholder='Add todo' style={InputStyle} onChange={changeTitle} value={Title}></input>
            <input type="submit" value='Add' className='btn'></input>
        </form>
    )
}


export default AddTodo;