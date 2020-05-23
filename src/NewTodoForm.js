import React, { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
       task: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(formData => 
            ({...formData, [name]: value}
        ));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { task } = formData;
        addTodo(task);
        setFormData(INITIAL_STATE);
    }

    return (
        <form>
            <label htmlFor="width">Add a Todo</label>
            <input type="text" 
                    id="task"
                    name="task"
                    value={formData.task}
                    onChange={handleChange} />
            <button onClick={handleSubmit}>Create a Box</button>
        </form>
    )
}

export default NewTodoForm;