import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
