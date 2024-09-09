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
      <nav>
        <div></div>
        <ul>
          <li>
            <NavLink to="/home" activeClass="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/room" activeClass="active">
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink to="/find-booking" activeClass="active">
              Find My Booking
            </NavLink>
          </li>
          {isUser && (
            <li>
              <NavLink to="/profile" activeClass="active">
                Profile
              </NavLink>
            </li>
          )}
          {isAdmin && (
            <li>
              <NavLink to="/admin" activeClass="active">
                Admin
              </NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <NavLink to="/login" activeClass="active">
                Login
              </NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <NavLink to="/register" activeClass="active">
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
