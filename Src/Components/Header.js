import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={{ backgroundColor: "#D6336C", color: "white", padding: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.3)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>MOTIONS FROM THE HEART</h1>
      <nav>
        <Link to="/" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/order" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>Order Form</Link>
        <Link to="/samples" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>Samples/Preview</Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
      </nav>
    </div>
  </header>
);

export default Header;
