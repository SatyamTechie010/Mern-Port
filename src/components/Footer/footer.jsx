import React from 'react';
import './footer.css'; // Make sure to import your CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Satyam's Developer Portfolio</h3>
          <p>
            Creating modern web and mobile applications with a focus on usability and clean code.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Me</h3>
          <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &#169; 2024 Satyam Sivam Sahu | All Rights Reserved | Made by Satyam Sivam Sahu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
