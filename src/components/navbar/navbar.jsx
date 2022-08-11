import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { CHANGE_LANG } from "../../constants/constants";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const langState = useSelector((state) => state.langReducer);
  console.log(langState);
  return (
    <nav
      style={{ position: "sticky" }}
      className="navbar px-3 navbar-expand-lg navbar-light bg-light"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <a className="navbar-brand">
          <img style={{ width: "70px" }} src="/img/ticket.png" alt="" />
          <Brand className="brand">MovieNew</Brand>
        </a>
      </Link>
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
            to="/movieList"
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
const Brand = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
`;
