import React, { useState } from "react";
import NewTodoForm from './NewTodoForm';
import Todo from "./Todo";
import { v4 as uuid} from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const id = uuid();
        setTodos(todos => {
            const todoCopy = [...todos, {task, id}];
            return todoCopy;
        })
    }

    const remove = (id) => {
        setTodos(todos =>  todos.filter(todo => todo.id !== id));
    }

    const changeTodo = (id, task) => {
        console.log(id)
        console.log(task)
        setTodos(todos => todos.map(todo => {
            if (todo.id === id) todo.task = task;
            return todo
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