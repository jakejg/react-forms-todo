import React, { useState } from "react";
import "./Todo.css"
import EditTodoForm from './EditTodoForm'

const Todo = ({task, remove, changeTodo, id}) => {
    const [editForm, setEditForm] = useState("")

    // add an edit form to the todo
    const editClick = () => {
        setEditForm(editForm => {
            return <EditTodoForm task={task} 
                                id={id} 
                                changeTodo={changeTodo}
                                removeEditForm={removeEditForm} />
        
        }) 
    }

    //remove the form 
    const removeEditForm = () => {
        setEditForm("")
    }

    return (
        <li className="Todo">
            {editForm}
            <button className="Todo-btn" onClick={editClick}>Edit</button>
            {task}
            <button className="Todo-btn" onClick={remove}>X</button>
        </li>
    )
}

export default Todo;