import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './page'
import './App.css'

function App() {
  return(
  <Router>
    <Header />
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  />
        </Routes>
        </Router>
        )
}

export default App
