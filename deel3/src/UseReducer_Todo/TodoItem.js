import React from 'react'
import { ACTIONS } from './Todo_Redu'

function TodoItem({todo, dispatch}) {
    return (
        <div className="todo-item-redu">
            <p 
            className="todo-red" 
            style={{color: todo.complete ? '#AAA' : '#000', 
            textDecoration: todo.complete ? 'line-through' : 'none'} 
            }>
                {todo.name}
            </p>
            <button onClick={()=> dispatch({
                    type: ACTIONS.TOGGLE_TODO, 
                    payload: {id: todo.id} 
                })}>
                    Toggle</button>
            <button onClick={()=> dispatch({
                    type: ACTIONS.DELETE_TODO, 
                    payload:{id: todo.id}
                })}>
                    Delete</button>
        </div>
    )
}

export default TodoItem
