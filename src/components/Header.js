import React from 'react';
import "../css/App.css";
import logo from "../img/marvelstudios50.png"

const Header = props => (
  <header className="header">
    <img 
      className="headerImg"
      src={logo} 
      alt="Superhero Memory Game!"/>
  </header>
);

export default Header;