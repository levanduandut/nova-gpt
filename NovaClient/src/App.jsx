import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {BrowserRouter , Routes, Route, Navigate} from "react-router-dom"

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        
      </BrowserRouter>
    </div>
  )
}

export default App
