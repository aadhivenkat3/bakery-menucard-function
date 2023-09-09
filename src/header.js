import React from 'react'
import Menu from './menu';
import './header.css'
import Footer from './footer';

const Header = () => {
  return (
    <div>
        <h1 className = "container">FAST REACT PIZZ CO.</h1>
        <Menu/>
        <Footer/>
    </div>
  );
}

export default Header;