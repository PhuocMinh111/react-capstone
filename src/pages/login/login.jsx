import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackHome from "../../components/backHome/backHome";
import { fetchUserLogin } from "../../services/user";
export default function Login() {
  const [value, setValue] = useState({
    taiKhoan: "",
    matKhau: ""
  });
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  async function loginUser() {
    try {
      const result = await fetchUserLogin(value);
      const data = await result.data;
      localStorage.setItem("USER_ACESS", JSON.stringify(data));
    } catch (err) {
      const error = err.response.data.content;
      setErr(error);
    }
  }
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
        <button type="submit" className="btn btn-success mt-3 w-100">
          LOGIN
        </button>
        {err && <span className="text-danger mt-3">{err}</span>}
      </form>
    </>
  );
}
