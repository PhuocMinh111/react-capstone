import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import checkValid from "../utils/validation";
import { fetchSignInApi } from "../services/user";
import { Navigate, useNavigate } from "react-router-dom";
export default function SignIn(props) {
  const [value, setValue] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);
  const [err, setErr] = useState({});
  const navigate = useNavigate();
  function handleChange(e) {
    setValue({
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // setSubmit(true);
    console.log(value);
    setErr(checkValid(value));
    // console.log(value);
    // if (Object.keys(err).length > 1) return;
    // fetchSignIn();
    // setErr({});
  }
  useEffect(() => {
    // setErr(checkValid(value));
    if (Object.keys(err).length > 1) return;
    fetchSignIn();
    navigate("/login");
    // setErr({);
  }, [err]);

  async function fetchSignIn() {
    console.log(value);
    // if (Object.keys(err).length > 0) return;
    const result = await fetchSignInApi(value);
    console.log(result);
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
      {err.taiKhoan && <span className="text-danger">* {err.taiKhoan}</span>}
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
      <br />
      <button type="submit" className="btn btn-success mt-3 w-25">
        Sign Up
      </button>{" "}
      <button onClick={props.login} className="w-25 ml-2 mt-3 btn btn-success">
        Login
      </button>
    </form>
  );
}
