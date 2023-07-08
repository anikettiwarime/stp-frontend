import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
// import Helper from './components/Helper'
import Error from './pages/Error'
import Register from './pages/Register'


const App = () => {
  return (
    <div className='h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='contact/' Component={Contact} />
          <Route path='register/' Component={Register} />
          <Route path='*' Component={Error} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App