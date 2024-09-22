import logo from './logo.svg';
import './App.css';
import { useState , useContext } from 'react'
import Paragrap from './para';
import {Context} from './ThemeContext';

function App() { 
  const attr = useContext(Context)
  return (
    <div class = "App">
      <button onClick={attr.handlerClick}>Toggle</button>
      <Paragrap />
    </div>
  );
}

export default App;
