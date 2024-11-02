import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Contact from './components/Contact/contact';
import FirstSection from './components/FirstSection/firstsection';
import SecondSection from './components/SecondSection/secondsection';
import Footer from './components/Footer/footer';
// Import missing components
// import Home from './components/Home/home';
import About from './components/About/About';
import Services from './components/Services/services';
import Projects from './components/Projects/projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Default route or main content */}
        <Route 
          path="/" 
          element={
            <>
              <FirstSection />
              <SecondSection />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
