import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
export default function BackHome({ color }) {
  let navigate = useNavigate();
  return (
    <nav
      style={{ background: "#001529" }}
      className={`navbar navbar-expand-lg navbar-light `}
    >
      <button
        className="btn btn-light"
        style={{ fontWeight: "3rem" }}
        onClick={() => navigate("/")}
        navigate=""
      >
        <FaArrowLeft />
      </button>
    </nav>
  );
}
