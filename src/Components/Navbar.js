import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const user = useSelector((state) => state.user.name);
  const cartItems = useSelector((state) => state.cart || []);

  // Handle cart quantity safely
  const cartQuantity = (cartItems && cartItems.length > 0) 
    ? cartItems.reduce((total, item) => total + item.quantity, 0) 
    : 0;

  return (
    <nav style={{ backgroundColor: 'darkkhaki' }} className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <Link className="fw-bold navbar-brand font-weight-bold text-uppercase" to="/home">
          E-Commerce
        </Link>
         <nav style={{ backgroundColor: 'darkkhaki' }} className="navbar navbar-expand-lg navbar-light shadow-sm">
  <div className="container">
   
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-uppercase text-dark" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase text-dark" to="/products/electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase text-dark" to="/products/jewelery">Jewelery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase text-dark" to="/products/men's clothing">Men's Clothing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-uppercase text-dark" to="/products/women's clothing">Women's Clothing</Link>
        </li>
      </ul>
      <div className="d-flex align-items-center">
        {/* Other elements like search, wishlist, cart */}
      </div>
    </div>
  </div>
</nav>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add your navigation links */}
          </ul>
          <div className="d-flex align-items-center">
            <span className="navbar-text me-3">
              Hello, <strong>{user || 'Guest'}</strong>
            </span>
            <div className="position-relative me-3">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <Link className="btn btn-outline-primary position-relative me-3" to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link className="btn btn-outline-primary position-relative" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartQuantity}
              </span>
            </Link>
        
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

