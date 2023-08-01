import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fs-2 px-2 fw-bold" to="/">
          Mapsa ECOMMERCE
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Link
              </NavLink>
            </li>
          </ul>
          <form className="d-flex mx-4 align-item-center" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i class="fa fa-magnifying-glass-plus"></i>
            </button>
          </form>
          <div className="buttons text-center">
            <NavLink to="/signin" className="btn btn-outline-dark m-2">
              <i className="fa-solid fa-sign-in-alt"></i> Login
            </NavLink>
            <NavLink to="/signup" className="btn btn-outline-dark m-2">
              <i className="fa-solid fa-user-plus"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
