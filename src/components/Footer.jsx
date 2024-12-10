import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome styles

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>© 2024 Dantech Cyber. All rights reserved.</p>
        <p>Proudly powered by DAN TECHNOLOGIES.</p>
        <div className="social-links mt-3">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-x-twitter"></i> {/* or 'fa-x-twitter' for X */}
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="mt-3">
          <a
            href="https://www.google.com/maps/place/Your+Location/@latitude,longitude,zoom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="fas fa-map-marker-alt"></i> Find Us Here
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;