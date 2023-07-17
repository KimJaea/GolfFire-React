import React from "react";

function Navbar() {
  return (
    <nav className="nav">
        <a href="/" className="site-title">
            GolfFire
        </a>
        <ul>        
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/accompany/">동행</a>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
