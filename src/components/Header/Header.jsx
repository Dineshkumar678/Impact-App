
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header container'>
      <div className='logo'>
        <img src='/images/Impact App icon and Logo 1.png' alt="logo" />
      </div>
      <ul>
        <li href="#" >Home</li>
        <li href="#" >Offerings</li>
        <li href="#" >About</li>
        <li href="#" >Careers</li>
        <li href="#" >Contact</li>
      </ul>
      <button>
        <div className='download'>
          <a href='http://onelink.to/impact_web' target='_blank' >Download Now <img src='/images/download.png' alt="Download Icon" /></a> 
        </div>
      </button>
    </div>
  );
}

export default Header;
