import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/Home.css";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/movies", label: "Movies" },
  { to: "/tv-shows", label: "TV Shows" },
  { to: "/my-list", label: "My List" },
];

function TopNav() {
  return (
    <header className="dashboard-navbar">
      <div className="navbar-logo">CINEVERSE</div>
      <nav className="navbar-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="navbar-profile">
        <div className="profile-avatar">A</div>
      </div>
    </header>
  );
}

export default TopNav;
