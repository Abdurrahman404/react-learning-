import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [displayName, setDisplayName] = useState('')

  const addName = () => {
    setDisplayName(name)
  }

  return (
    <>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter Your Name"
      /> 
      <br /><br />
      <button onClick={addName}>Enter</button>
      <h2>{displayName}</h2>
    </>
  )
}

export default App
