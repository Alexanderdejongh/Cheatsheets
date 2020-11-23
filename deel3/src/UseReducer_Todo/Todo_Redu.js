import React ,{useReducer, useState} from 'react'
import TodoItem from './TodoItem'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'

}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo =>{
                if(todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name){
    return{id: Date.now(), name:name, complete:false}
}

function Todo_Redu() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handelSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload:{name:name}})
        setName('')
    }

    return (
        <div>
            <div>
                <h1 className="Reducer_Title">This Todo App is made With <b>useReducer</b></h1>
            </div>
            <form className='inputToDO' onSubmit={handelSubmit}>
                <input type="text" value={name}
                onChange={e=> setName(e.target.value)}/>
            </form>
            <div className='outputToDO'>
                <h2>Your added Todos:</h2>
                {todos.map(todo =>{
                    return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                })}
            </div>
        </div>
    )
}

export default Todo_Redu
