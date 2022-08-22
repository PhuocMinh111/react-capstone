import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";
import styled from "styled-components";
import { useSelector } from "react-redux";
export default function HomeLayout() {
  const theme = useSelector((state) => state.themeReducer);
  return (
    <div className={theme.light ? "bg-dark text-light" : "bg-light text-dark"}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
