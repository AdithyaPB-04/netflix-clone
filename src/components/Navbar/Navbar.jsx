import React from 'react'
import './Navbar.css'
import logo from './../../assets/logo.png'
import search_icon from './../../assets/search_icon.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
            <li>Browser by Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt="" className='icons'></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar
