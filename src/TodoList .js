import React, { useState } from "react";
import NewTodoForm from './NewTodoForm';
import Todo from "./Todo";
import { v4 as uuid} from 'uuid';
import { setLocalStorage, getLocalStorage } from './LocalStorage';

const TodoList = () => {
    const [todos, setTodos] = useState(getLocalStorage());

    const addTodo = (task) => {
        const id = uuid();
        setTodos(todos => {
            const todoCopy = [...todos, {task, id}];
            setLocalStorage(todoCopy);
            return todoCopy;
        })
        
    }

    const remove = (id) => {
        setTodos(todos =>  {
            const filtered = todos.filter(todo => todo.id !== id)
            setLocalStorage(filtered);
            return filtered;
        });
        
    }

    const changeTodo = (id, task) => {
        setTodos(todos => todos.map(todo => {
            if (todo.id === id) todo.task = task;
            return todo;
        })
        )
    }

    const todolist = todos.map(({task, id}) => {
        return <Todo
            key={id}
            task={task}
            id = {id}
            remove={() => remove(id)}
            changeTodo={changeTodo}
        />
    });
  
    return ( 
        <div>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default TodoList;