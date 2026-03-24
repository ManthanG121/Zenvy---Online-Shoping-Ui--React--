import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
   
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">Zenvy</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/shop" class="nav-link">Shop</Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">About Us</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">Contact Us</Link>
                </li>
              </ul>
              <div class="d-flex align-items-center gap-3 ms-3">
                <Link to="/wishlist"><i class="bi bi-heart-fill fs-5"></i></Link>
                <Link to="/cart"><i class="bi bi-bag-dash-fill fs-5"></i></Link>
              </div>
            </div>
          </div>
        </nav>
   
  )
}

export default Navbar
