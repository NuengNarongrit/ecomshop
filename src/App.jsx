import { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

import { Outlet } from 'react-router-dom';
import Nav from './pages/Nav'
import Banner from './components/shopping/Banner'
import Footer from './pages/Footer'
import Preload from './pages/Preload'
import NewsPage from "./components/shopping/news/newsPage";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ความยาวของแอนิเมชัน (ms)
      once: true, // ให้เล่นแอนิเมชันครั้งเดียวเมื่อ scroll ถึง
    });
  }, []);
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
          <Nav/>
          <Banner/>
          <Outlet/> 
          <NewsPage />
          <Footer/>
        </>
      )}
    </>
  )
}

export default App
