import React from 'react';
import { Link } from 'react-router-dom';
import { frame,motion } from 'framer-motion';
import './navbar.style.css'

function Navbar() {

  

  return <>
    <motion.nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white position-fixed"
      initial={{y:'-100vh'}}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        damping:20,
        stiffness: 300,
        delay:.5,
        
        
        
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="home"><span>BE</span>FIT</Link>
        <button className="navbar-toggler m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse m-2" id="navbarNav">
          <ul className="navbar-nav ms-auto border-2">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="service">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="trainer">Trainer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="plan">Plan</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="register">Register</Link>
            </li>

          </ul>
        </div>
      </div>
    </motion.nav>
  </>

}

export default Navbar;