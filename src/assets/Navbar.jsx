import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ 
    backgroundColor: "#2541B2",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  }}>
    <ul style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
      <li>
        <Link to="/"style={{color: "white"}}>Home</Link>
      </li>
      <li>
        <Link to="/projects" style={{color: "white"}}>Projects</Link>
      </li>
      {/* <li>
        <Link to="/skills" style={{color: "white"}}>Skills</Link>
      </li> */}
      <li>
        <Link to="/contact" style={{color: "white"}}>Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
