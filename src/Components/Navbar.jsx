// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
  return (
    <header style={{ backgroundColor: "#3498db", padding: "1rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold" }}>Task Manager</h1>
        <nav>
          <ul style={{ display: "flex", gap: "1rem", color: "#ffffff" }}>
            <li>
              <Link to="/home" style={{ textDecoration: "none", color: "#ffffff" }} className="hover:text-gray-200">Home</Link>
            </li>
            <li>
              <button onClick={handleLogout} style={{ border: "none", backgroundColor: "transparent", cursor: "pointer", color: "#ffffff" }} className="hover:text-gray-200 focus:outline-none">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
