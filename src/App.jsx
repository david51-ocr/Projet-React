import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Home from './page/Home'
import About from './page/About'
import Error from './page/Error'
import Logement from './page/Logement'
import './App.css'
import Footer from './components/Footer'

function App() {
  return(
  <Router>
    <Header />
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </Router>
        )
}

export default App
