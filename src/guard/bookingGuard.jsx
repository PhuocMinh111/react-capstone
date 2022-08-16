import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function BookingGuard() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userState.user) {
      navigate("/login");
    }
  }, [userState]);
  return <Outlet />;
}
