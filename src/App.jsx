import React from 'react'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/HeroSection/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Footer1 from "./components/Footer1"
import  About from "./components/HeroSection/About"
import Services from "./components/HeroSection/Services"
import Contact from "./components/HeroSection/ContactUs"

const App = () => {
  return (

    <BrowserRouter>
    <Header className="header"/>
  
    <Routes >
      <Route path ="/"  element={<Home/>} />
      
    </Routes>
    <Routes >
      <Route path ="/About"  element={<About/>} />
      <Route path ="/Services"  element={<Services/>} />
      <Route path ="/Home"  element={<Home/>} />
      <Route path ="/ContactUs"  element={<Contact/>} />
    



    </Routes>
    <Footer1/>
    <Footer className="footer"/> 
    </BrowserRouter>

  
  )
}

export default App
