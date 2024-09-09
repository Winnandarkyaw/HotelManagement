import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";

function Navbar() {
  const isAuthenticated = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();
  const isUser = ApiService.isUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    const isLogOut = window.confirm("Are your sure you really want to logout");
    if (isLogOut) {
      ApiService.logout();
      navigate("/home");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/home">Winvy Hotel</NavLink>
        </div>
        <ul className="navbar-ul">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/room"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-booking"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Find My Booking
            </NavLink>
          </li>
          {isUser && (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Profile
              </NavLink>
            </li>
          )}
          {isAdmin && (
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Admin
              </NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Login
              </NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "")}>
                Register
              </NavLink>
            </li>
          )}
          {isAuthenticated && <li onClick={handleLogout}>LogOut</li>}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
