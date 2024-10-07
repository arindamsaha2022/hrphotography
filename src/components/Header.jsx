import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h1 className='item'>
        <Link to="/"><img src="../src/assets/navlogo.png" className="logo" alt="logo" /></Link>
      </h1>
     
      {/* Toggle button for menu */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Conditionally applying class to ul based on menuOpen state */}
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <Link to="/"onClick={()=>{setMenuOpen(!menuOpen)}}>Home</Link>
          </li>
          <li>
            <Link to="/contact"onClick={()=>{setMenuOpen(!menuOpen)}}>Contact us</Link>
          </li>
          <li>
            <Link to="/about"onClick={()=>{setMenuOpen(!menuOpen)}}>About</Link>
          </li>
          <li>
            <Link to="/work"onClick={()=>{setMenuOpen(!menuOpen)}}>Work Samples</Link>
          </li>
          <div className='call item'>
          <a href="tel:8167014165" style={{color:"white"}}>Call Now</a>
        </div>
        </ul>

    </nav>
  );
};

export default Header;
