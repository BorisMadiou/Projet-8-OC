import React from "react";
import './header.scss'
import headerImage from '../../../public/assets/images/header.jpg';

function Header() {
  return (
    <header className="header">
      <img
        src={headerImage}
        alt="Header"
      />
    </header>
  );
}

export default Header;
