import React, { useState } from "react";
import "./Todo.css"
import EditTodoForm from './EditTodoForm'

const Todo = ({task, remove, changeTodo, id}) => {
    const [editForm, setEditForm] = useState("")
    const [completed, setCompleted] = useState(false)

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

    const lineThrough = () => {
        setCompleted(!completed)
        
    }
 
    return (
        <li className="Todo">
            {editForm}
            <button className="Todo-btn" onClick={editClick}>Edit</button>
            <span style={completed ? {textDecoration: "line-through"}: null}>
                {task}
            </span>
            <button className="Todo-btn" onClick={lineThrough}>Mark as Done</button>
            <button className="Todo-btn" onClick={remove}>Delete</button>
        </li>
    )
}

export default Todo;