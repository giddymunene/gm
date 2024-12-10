import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4">Access Cyber Café Services Anytime, Anywhere</h1>
        <p className="lead">
          Easily access Cyber Café services online without leaving your home. Fast, reliable, and secure services at your fingertips.
        </p>
        <Link to="/about-us" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    </div>
  );
};

export default HeroSection;