
//import React, { useState, useEffect } from 'react'
import './App.css';

//import Logo from './components/ReactLogoSpinning';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../src/assets/background5.jfif'
// import background from '../src/assets/Web-Header-Background/Web-Header-Background.svg'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {

 

  return (
   
    // <body>
    
  
      
    //     <SimpelHeader />
    //     <Header />
    //     <main className="container mt-5">
         
    //       <Home />
    //       <Projects />
    //       <Contact />
          
    //     </main>
    //     <Footer />
   
        
     
    // </body>
    <BrowserRouter basename="/portfolio/">
     <Header/>
      <Projects />
     <Skills/>
     
     <Contact />
     <Footer />
    </BrowserRouter>

    
  );
}

export default App;


/*<BrowserRouter basename="/portfolio/">
          <SimpelHeader />
        <main className="container mt-5">
        <Routes>
          <Route  path="/Projects" element={<Projects />} />

          <Route  path="/" element={<Home />} />
          
          <Route  path="/Contact" element={<Contact />} />
        </Routes>
        </main>
          <Footer />
          
         
        </BrowserRouter>*/