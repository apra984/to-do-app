import React from "react";

function Form({setInputText, setTodos, todos, inputText}) {
    const handleInputText = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText, completed: false, id: Math.random()*1000}
            ]);
    }

    return (
        <form>
            <input onChange={handleInputText} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All tasks</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    );
};

export default Form;