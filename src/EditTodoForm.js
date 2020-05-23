import React, { useState } from "react";

const EditTodoForm = ({task, changeTodo , id, removeEditForm}) => {
    const [formData, setFormData] = useState(task);

    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setFormData(formData => value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changeTodo(id, formData);
        removeEditForm();
    }

    return (
        <form>
            <input type="text"
                    value={formData}
                    onChange={handleChange} />
            <button onClick={handleSubmit}>Change</button>
        </form>
    )
}

export default EditTodoForm;