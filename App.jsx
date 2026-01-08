import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiData from './api/api.js'
import Packages from './Packages.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Package Tracking Viewer </h1>
    <div>
      <Packages />
    </div>
    </>
  )
}

export default App
