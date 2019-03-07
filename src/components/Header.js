import React from 'react';
import "../css/App.css";
import logo from "../img/placeholder.jpg"

const Header = props => (
  <header className="header">
    <img 
      className="headerImg"
      src={logo} 
      alt="React Memory Game!"/>
  </header>
);

export default Header;