import { useState } from 'react'

import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [password,setPassword] = useState('');


  

  return (
      <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold mb-6 text-gray-800">Password Generator</h1>

  <div className="card bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
    <div className="flex items-center gap-2 mb-4">
      <input 
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
        Copy
      </button>
    </div>

    <div className="slider space-y-4">
      <div className="flex flex-col">
        <input 
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
        />
        <label htmlFor="length" className="text-sm text-gray-700 mt-1">
          Length: {length}
        </label>
      </div>

      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={() => setnumberAllowed((prev) => {!prev})}
        />
        <label htmlFor="numbers" className="text-sm text-gray-700">Numbers</label>
      </div>

      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={() => setcharAllowed((prev) => {!prev})}
        />
        <label htmlFor="charInput" className="text-sm text-gray-700">Characters</label>
      </div>
    </div>
  </div>
</div>

  )
}

export default App
