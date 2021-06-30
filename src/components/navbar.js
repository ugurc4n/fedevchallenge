import React from 'react'
import './navbar.css'

const Movie = () =>
  <div className="container">
    <nav className="navbar">
      <ul className='movie-list'>
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
      </ul>
        <input type="text" placeholder="Arama" name="search"/>
    </nav> 
      <div className="main-text" >
        <h1>LOREM İPSUM</h1>
      </div>
  </div>;
export default Movie;
