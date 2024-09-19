import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Component from './content';








function App() { 
  const [mou, getmou] = useState(false)
  const check = () => {
    return getmou(!mou)
  }



  return (
    <div class = "App">
      <button onClick={check}>Toggle</button>
      {mou && <Component/>}
    </div>
  );
}

export default App;
