import React from 'react'
import '../style/navbar.css'

const Navbar = () =>
<div className="background">
  <div className="main-nav">
    <nav className="navbar">
      <div className='nav-list'>
        <li>
          <a href="#">Film</a>
        </li>
        <li>
          <a href="#">Dizi</a>
        </li>
        <li>
          <a href="#">Çocuk</a>
        </li>
        <li>
          <a href="#">Canlı Yayın</a>
        </li>
      </div>
      <input type="text" placeholder="Arama" name="search"/>
    </nav>
    <div className="main-title">
      <p>LOREM IPSUM </p>
      <p className="bold">DOLOR SIT AMET</p>
    </div>
  </div>
</div>
export default Navbar;
