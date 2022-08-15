import React from "react";
import { useState } from "react";
import checkValid from "../utils/validation";

export default function SignIn(props) {
  const [value, setValue] = useState({});
  const [err, setErr] = useState({});
  function handleChange(e) {
    setValue({
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setErr(checkValid(value));
    console.log(err);
    if (Object.keys(err).length > 1) return;
    setErr({});
  }
  return (
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
      {err.email && <span className="text-danger">* {err.email}</span>}
      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          name="matKhau"
          onChange={handleChange}
          type="text"
          className="form-control"
        />
      </div>
      {err.matKhau && <span className="text-danger">* {err.matKhau}</span>}
      <div className="form-group">
        <label>email</label>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          className="form-control"
        />
      </div>
      {err.email && <span className="text-danger">* {err.email}</span>}
      <div className="form-group">
        <label>Họ Tên</label>
        <input
          name="hoTen"
          onChange={handleChange}
          type="text"
          className="form-control"
        />
      </div>
      {err.hoTen && <span className="text-danger">* {err.hoTen}</span>}
      <button type="submit" className="btn btn-success mt-3 w-25">
        Sign Up
      </button>{" "}
      <button onClick={props.login} className="w-25 ml-2 mt-3 btn btn-success">
        Login
      </button>
    </form>
  );
}
