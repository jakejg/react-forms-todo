import React from "react";
import "./Todo.css"

const Todo = ({task, remove}) => {

    return (
        <ul>
            <li className="Todo">
                {task}
                <button className="Todo-btn" onClick={remove}>X</button>
            </li>
        </ul>
    )
}

export default Todo;