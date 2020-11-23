import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, setTodos, filterdTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterdTodos.map(todo =>(
                    <TodoItem 
                    text={todo.text}
                    todo={todo}
                    key={todo.id}
                    todos={todos} 
                    setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
