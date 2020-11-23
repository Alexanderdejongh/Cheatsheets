
import React, {useState, useEffect, useRef, useReducer} from 'react'



function UserAPI() {
    const reducer = (state, action) =>{
        switch(action.type){
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                return {count: state.count -1}
            default:
                return state
        }
        

    }

    const [resourcheType, setResourcheType ] = useState('posts')
    const [items, setItems] = useState([])
    const [witdh, setWitdh] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [name, setName] = useState('')
    const renderCount = useRef(0)
    const inputRef = useRef()
    const [state, dispatch] = useReducer(reducer, {count: 0})
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourcheType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    },[resourcheType])

    const handleResize =()=>{
        setWitdh(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{
        renderCount.current = renderCount.current +1;
    })

    const focus = ()=>{
        inputRef.current.focus()
        inputRef.current.value = 'You need to type your name here'
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
    },[])


    const increment = () =>{
        dispatch({type: 'increment'})
    }
    const decrement = () =>{
        dispatch({type: 'decrement'})
    }

    return (
        <>
            <div className="boxybox">
                <p>How big is this box?</p>
                Width: {witdh} <br/>
                Height: {height}
            </div>
            <div className="projectName">
                <input ref={inputRef}value={name} onChange={e=>{setName(e.target.value)}}/>
                <p>My name is {name}</p>
                <p>I rendered {renderCount.current} times</p>
                <button onClick={focus}>Focus</button>
            </div>

            <div className="APIbuttonbox">
                <button onClick={() => setResourcheType("posts")}>Posts</button>
                <button onClick={() => setResourcheType("users")}>Users</button>
                <button onClick={() => setResourcheType("comments")}>Comments</button>
            </div>
            <h1>{resourcheType}</h1>
            {/* {items.map(item =>{
                return <pre>{JSON.stringify(item)}</pre>
            })} */}
            <div>
            <h1>Dit is gemaakt met useReducer:</h1>
                <div className="plusmin">
                    <button onClick={decrement}>-</button>
                    <p>{state.count}</p>
                    <button onClick={increment}>+</button>
                </div>
            </div>
        </>
    )
}

export default UserAPI
