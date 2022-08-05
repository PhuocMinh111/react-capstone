import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_LANG } from "../../constants/constants";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const langState = useSelector((state) => state.langReducer);
  console.log(langState);
  return (
    <nav className="navbar p-3 navbar-expand-lg navbar-light bg-light">
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
        className={`${
          !open && "collapse"
        }  navbar-collapse justify-content-end pr-md-3`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav mr-3 p-3">
          <NavLink
            className="nav-item nav-link"
            style={{ textDecoration: "none" }}
            to="/"
          >
            {langState.final.home}
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            style={{ textDecoration: "none" }}
            to="MovieList"
          >
            {langState.final.movie}
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            {langState.final.login}
          </NavLink>
          <span>
            <button
              className="btn btn-success"
              onClick={() => dispatch({ type: CHANGE_LANG })}
            >{`${langState.final.flag}${langState.final.lang}`}</button>
          </span>
          {/* <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
            <input
              // style={{
              //   display: isSearch ? "inline" : "none"
              // }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={() => setSearch(true)}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <FaSearch />
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
