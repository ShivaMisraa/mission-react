import React from 'react';
import {Link} from "react-router-dom"
import "./header.css"
function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Your Logo</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="github">Github</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/get-started">Get started</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
