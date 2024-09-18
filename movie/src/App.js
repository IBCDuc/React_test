import logo from './logo.svg';
import './App.css';
import { useState } from 'react'




function Component() {
  const [jobb, setjobb] = useState('')
  const [job, setjobs] = useState( () => {
      const getitem = JSON.parse(localStorage.getItem('jobs'))
      if (getitem) {
        return getitem
      }
      return []
      
  })
  const submit = () => {
    setjobs((prev) => {
    const setitem = [...prev , jobb]
    const jsonitem = JSON.stringify(setitem)
    localStorage.setItem('jobs', jsonitem)
    return setitem
  })
    setjobb('')
  }

  const deleted = () => {
    localStorage.removeItem('jobs')
    setjobs([])
  }


  return (
    <div style = {{padding: 20}}>
        <input
            value = {jobb}
            onChange = {e => setjobb(e.target.value)}
        >
        </input>
        <button onClick = {submit}>Add</button>
        <button onClick = {deleted}>Delete</button>
        <ul>
          {job.map((com, index) => (
              <li key = {index}>{com}</li>) 
          )}
        </ul>
    </div>
  )
}




function App() {
  return (
    <Component/>
  );
}

export default App;
