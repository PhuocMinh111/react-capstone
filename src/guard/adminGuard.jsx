import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import BackHome from "../components/backHome/backHome";
import Footer from "../components/footer";
export default function AdminGuard() {
  const user = useSelector((state) => state.userReducer);
  const [admin, setAdmin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user === null) navigate("/login");
    if (user.user !== null && user.user.maLoaiNguoiDung !== "QuanTri")
      setAdmin(false);
  }, [user]);

  return admin ? <Outlet /> : <NotAdmin />;
}

function NotAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <>
      <BackHome />
      <div className="container mt-3 text-danger text-danger text-center">
        <h2>Not Admin</h2>
      </div>
      <Footer />
    </>
  );
}
