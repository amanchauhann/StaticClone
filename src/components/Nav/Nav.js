import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <>
        <div className="navigation" />
        <nav className="header">
            <img src="assets/navlogo.svg" alt="navbar-logo" className="nav-logo" />
            <div className="navRightContainer">
                <a href="#" className="links">
                    Sign In
                </a>
                <button className="nav-btn links">Dukaan for PC</button>
            </div>
      </nav>
    </>
  )
}

export default Nav