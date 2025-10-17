import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert("Button Clicked!")
  }
  const handleClick2 = () => {
    alert('Button 2 clicked!')
  }

  return (
    <>
      
      <h3>Vite + React</h3>
      <button onClick={handleClick}>Click Me</button>
       <button onClick={handleClick2}>Click M2</button>
      
      
    </>
  )
}

export default App
