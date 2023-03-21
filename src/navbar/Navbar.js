import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/home">Hi</Link>
      <Link to="/bye">Bye</Link>
    </nav>
  );
};

export default Navbar;
