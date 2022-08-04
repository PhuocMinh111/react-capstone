import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        onClick={() => setOpen(!open)}
        className={`navbar-toggler ${!open && "collapsed"}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`${!open && "collapse"}  navbar-collapse`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link to="/">
            <a className="nav-item nav-link active" href="#">
              Home
            </a>
          </Link>
          <Link to="MovieList">
            <a className="nav-item nav-link" href="#">
              Movies
            </a>
          </Link>
          <Link to="/login">
            <a className="nav-item nav-link" href="#">
              Login
            </a>
          </Link>
          <a className="nav-item nav-link disabled" href="#">
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
}
