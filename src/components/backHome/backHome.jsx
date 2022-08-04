import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
export default function BackHome() {
  let navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="btn "
        style={{ fontWeight: "3rem" }}
        onClick={() => navigate("/")}
        navigate=""
      >
        <FaArrowLeft />
      </button>
    </nav>
  );
}
