import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'darkkhaki' }} className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Welcome to our E-Commerce store, offering a wide range of products for all your needs.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="/home" className="text-dark ">Home</a></li>
              <li><a href="/products/electronics" className="text-dark">Electronics</a></li>
              <li><a href="/products/jewelery" className="text-dark">Jewelery</a></li>
              <li><a href="/products/men's clothing" className="text-dark">Men's Clothing</a></li>
              <li><a href="/products/women's clothing" className="text-dark">Women's Clothing</a></li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <a href="https://facebook.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-dark" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-dark text-light">
        © 2024 E-Commerce, All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;


