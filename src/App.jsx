import { useState,useEffect } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom';
import Nav from './pages/Nav'
import Banner from './components/Banner'
import Footer from './pages/Footer'
import Preload from './pages/Preload'

function App() {
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    {screenLoading ? (
      <Preload />
    ) : (
      <>
        <Nav />
        <Banner />
        <Outlet /> 
        <Footer />
      </>
    )}
  </>
  )
}

export default App
