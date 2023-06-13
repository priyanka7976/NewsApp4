import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //</nav><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/general"
                  onClick={() => {
                    // window.location.href = "/NewsApp3";
                    window.location.href = "/";
                  }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/business"
                  onClick={() => {
                    window.location.href = "/business";
                  }}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  onClick={() => {
                    window.location.href = "/entertainment";
                  }}
                >
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/health"
                  onClick={() => {
                    window.location.href = "/health";
                  }}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/science"
                  onClick={() => {
                    window.location.href = "/science";
                  }}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sports"
                  onClick={() => {
                    window.location.href = "/sports";
                  }}
                >
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/technology"
                  onClick={() => {
                    window.location.href = "/technology";
                  }}
                >
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
