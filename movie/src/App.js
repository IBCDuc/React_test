import logo from './logo.svg';
import './App.css';
import { useState , useContext, useReducer, useRef } from 'react'
import { StoreContext } from './store';
import reducer, { initState }  from './store/reducer';
import { useStore } from './store'
import { actions } from './store'
import { set_state_input } from './store/actions';

function App() { 
  const [state, dispatch] = useStore()
  const {todo, todos} = state
  const inputtype = useRef()

  const HandlerAdd = () => {
    inputtype.current.focus()
    dispatch(actions.add_state_input(todo))
  }
  
  return (
    <div class = "App">
      <input
          ref = {inputtype}
          value = {todo || ""}
          onChange= {
            e => {
              return dispatch(actions.set_state_input(e.target.value))
            }
          }
      
      ></input>
      <button onClick = {HandlerAdd}>Add</button>
      <ul>
        {todos.map((item, index) => {
          return (<li key = {index}>{item} <span onClick={() => 
            dispatch(actions.delete_todo_input(index))
          }>Xoa</span></li>)
        })}
      </ul>
    </div>
  );
}

export default App;
