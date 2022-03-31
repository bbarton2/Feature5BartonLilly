import React from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom"
export function HeaderProtectedModule({ title }) {
  //main header component that is on all pages
  useEffect(() => {
    document.title = title;
  }, [title]);
  // in the future we will add links and routing to the buttons
  return (
  <div>
    <header>
       <nav className="navbar">
        <ul className="nav-option">
          <li className="nav-item">
             <Link to="/home" className="nav-link">Home</Link> 
          </li>
          <li className="nav-item">
             <Link to="/specials"  className="nav-link">Specials</Link> 
          </li>
          <li className="nav-item">
             <Link to="/subscribe" className="nav-link">Subscribe</Link>
          </li>
        </ul>
      </nav> 

      <div className="cover">
        <h1 className="company back">Insert Title</h1>
      </div>

      <br />
    </header>
  </div>
  );
}

export default HeaderProtectedModule;