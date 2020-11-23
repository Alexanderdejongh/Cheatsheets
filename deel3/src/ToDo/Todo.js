import React,{useState, useEffect} from 'react'
import './Todo.css';
import Form from './Form'
import TodoList from './TodoList'

function Todo() {
    // state stuff
    const [inputText, setInputText] = useState('')
    const [todos, setTodos]=useState([])
    const [status, setStatus] =useState("all")
    const [filterdTodos, setFilterdTodos] = useState([])

    const saveLocalTodos =() => localStorage.setItem('todos', JSON.stringify(todos))
    
    const  getLocalTodos = () =>{
        if(localStorage.getItem("todos") === null){
            localStorage.setItem('todos', JSON.stringify([]))
        }else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }

    //USE EFFECT
    useEffect(()=>{
        getLocalTodos()
    }, [])

    useEffect(()=>{
        saveLocalTodos()
        filterHandeler();
    }, [todos, status]) 

    // functions
    const filterHandeler = () =>{
        switch(status){
            case 'completed':
                setFilterdTodos(todos.filter(todo => todo.completed === true))
                break
            case 'uncompleted':
                setFilterdTodos(todos.filter(todo => todo.completed !== true))
                break
            default:
                setFilterdTodos(todos)
                    break
        }
    }

    return (
        <div className="toDOList">
            <header>
                <h1><b>Sander's</b> Todo List</h1>
                <br/>
            </header>
            <Form 
            inputText={inputText}
            setInputText={setInputText} 
            setTodos={setTodos} 
            todos={todos}
            setStatus={setStatus}
            />
            <TodoList todos={todos} 
            setTodos={setTodos}
            filterdTodos={filterdTodos}
            />
        </div>
    )
}

export default Todo
