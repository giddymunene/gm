import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Define routes for each component */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;