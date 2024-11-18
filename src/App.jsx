import { useState } from 'react'
import './App.css'

import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Nav from './components/Nav'
import Banner from './components/Banner'
import About from './components/About'
import Footer from './components/Footer'
import CardProduct from './components/product/CardProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav />
      <Banner/>
      <Routes>
        <Route path='/' element={<CardProduct />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
