import React, { useRef } from 'react'
import {FaTimes,FaReact,FaBars} from "react-icons/fa";
import "/home/nineleaps/project/src/css/Navbar.css";

function Navbar() {
  const navRef=useRef();
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive");
  }
  return (
    <div className='container'>
      <FaReact size={40} />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About Us</a>
        <a href="/#">Log In</a>
        <a href="/#">Sign Up</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  )
}
export default Navbar;