import React from 'react';
import './NavigationItems.css';
import Headroom from "react-headroom"

const navigationItems = () => {
return (
    <Headroom>
        <header className = 'header'>
        <a href="/" className="logo"> <span className="grey-color"> &lt;</span>
          <span className= "logo-name"> Sonali Singh</span> 
       <span className="grey-color">/&gt;</span> </a> 

       <input className="menu-btn" type="checkbox" id="menu-btn" />
       <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
   <ul className="menu">
      <li className='navItem'> <a href="#skills">Skills </a></li>
      <li className='navItem'><a href="#projects">Projects </a></li>
      <li className='navItem'> <a href="#experience">Work Experience</a></li>
      <li className='navItem'><a href="#achievements">Achievements </a></li>
      <li className='navItem'> <a href="#contact">Contact Me </a></li>
      </ul>
      </header>
      </Headroom>


);
}

export default navigationItems;