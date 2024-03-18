// import './App.css'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import OurProcess from './components/OurProcess'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import WhoAreWe from './components/WhoAreWe'
import  WhyUs  from './components/WhyUs'
import HeroSection from './components/HeroSection'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUsPage from './pages/ContactUsPage'

function App() {
  const [windowSize, setwindowSize] = useState(window.screen.width)


  useEffect(() => {
    const handleResize = () => {
      setwindowSize(window.screen.width);
    };
  
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    // <div className='flex flex-col gap-14 md:gap-40 '>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home windowSize={windowSize} />}>
          <Route index element={<Home windowSize={windowSize}  />} />
          <Route path="WhoAreWe" element={<WhoAreWe />} />
          <Route path="ContactUs" element={<ContactUsPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <HeroSection/>
      <WhoAreWe/>
      <OurProcess/>
      <WhyUs/>
      <Portfolio windowSize={windowSize}/>
      <Testimonials  windowSize={windowSize}/>
      <ContactUs/>
      <Footer/> */}
      {/* landingpage, routing, form submission and validation */}
    </div>
  )
}

export default App
