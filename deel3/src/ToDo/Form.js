import React from 'react'

function Form({setInputText,inputText, todos, setTodos, setStatus}) {
    const inputTextHandeler = (event) =>{
        setInputText(event.target.value)
    }

    const submitTodoHandler = (event) =>{
        event.preventDefault()
        setTodos([...todos,
            {text: inputText,
            completed: false, 
            id: Math.random() * 1000}])
        setInputText("")
    }

    const statusHandeler = (event) =>{
        setStatus(event.target.value)
    }

    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandeler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandeler} name="tclassNameodos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
