import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'

function App() {
  
  return (
  
   <div className="App">

    <Routes>
      <Route path="/" element = {<Navigate to ="/login" />} />
      <Route path="/login" element ={<Login/>}/>
      <Route path="/signup" element ={< Signup/>}/>
      <Route path="/home" element ={<Home/>}/>
    </Routes>


   </div>
  )
}

export default App
