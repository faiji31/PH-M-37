import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users  from './uses'
import Counter from './counter'
import Batsman from './batsman'
import Friends  from './friends'
import { Suspense } from 'react'
import Friend from './friend'

const fetchUsers =fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())

const fetchFriends =fetch("https://jsonplaceholder.typicode.com/comments").then(res=>res.json())


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
       <Counter></Counter>
       <Batsman></Batsman>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>
      
      <Suspense fallback={<h3>Loading Friends List....</h3>}>
        <Friends fetchFriends={fetchFriends}></Friends>
      </Suspense>
       
      
      
    </>
  )
}

export default App
