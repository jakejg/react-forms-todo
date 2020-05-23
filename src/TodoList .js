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

    const todolist = todos.map(({task, id}) => {
        return <Todo
            key={id}
            task={task}
            remove={() => remove(id)}
        />
    });
  
    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todolist}
        </div>
    )
}

export default TodoList;