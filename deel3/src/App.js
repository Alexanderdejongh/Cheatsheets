import React,{useState} from 'react'
import Nav from './Components/Nav'
import Tweets from './Components/Tweets'
import Video from './Components/Video'
import ToDo from './ToDo/Todo'
import Shoplist from './Shoplist/Shoplist'
import CountingMachine from './CountingMachine/CountingMachine'
import UserAPI from './UserAPI/UserAPI'
import TodoRedu from './UseReducer_Todo/Todo_Redu'
import StateManagement from './StateManagement/StateManagement'
import './App.css';


function App() {

  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(false)


  const incrementer = () =>{
    return setCounter(pref => pref + 1)
  }
  const toggler =() =>{
    setToggle(prev =>  !prev)
  }

  return (
    <div className="App">
      <div className="home">
        <div className="tweetContainer">
          <Nav />
          <Tweets  />
        </div>
        <h1 className={toggle ? "active": 'unactief'}>Counter in React</h1>
        <button className="toggleh1" onClick={toggler}>Toggle h1</button>
        <h2>Counter: {counter}</h2>
        <button className="incrementer" onClick={incrementer}>increment by 1</button>
        <Video nr={counter} />
        <ToDo />
        <div className="shoppinglist">
          <h1 className="ShopTitle">Shopping-list</h1>
          <Shoplist />
        </div>
        <div className="countingMachine">
          <CountingMachine />
        </div>
        <div className="UserAPI">
          <UserAPI />
        </div>
        <div className="ReducerTodo">
          <TodoRedu />
        </div>
        <div className="StateManagement">
          <StateManagement />
        </div>
      </div>
    </div>
  );
}

export default App;
