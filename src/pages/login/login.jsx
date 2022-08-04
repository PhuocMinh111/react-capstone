import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackHome from "../../components/backHome/backHome";
export default function Login() {
  const [value, setValue] = useState({
    taiKhoan: "",
    matKhau: ""
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = () => {};
  return (
    <>
      <BackHome />
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tài khoản</label>
          <input
            name="taiKhoan"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            name="matKhau"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-success w-100">LOGIN</button>
      </form>
    </>
  );
}
