import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='bar'>
            <a href='#' className='links'>Company</a>
            <a href='#' className='links'>Content</a>
            <a href='#' className='links'>CPG House</a>
        </div>
        <div className='buttons'>
            <button className='login'>Login</button>
            <button className='demo'>Book a demo</button>
        </div>
    </div>
  )
}

export default Navbar;