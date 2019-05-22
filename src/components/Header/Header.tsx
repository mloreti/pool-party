import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

function Header() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
