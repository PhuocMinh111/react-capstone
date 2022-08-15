import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackHome from "../../components/backHome/backHome";
import { fetchUserLogin } from "../../services/user";
import { useDispatch } from "react-redux";
import { SET_USER_LOGIN } from "../../constants/constants";
import { useSelector } from "react-redux";
import SignIn from "../../modules/sign-in";
export default function Login() {
  const [value, setValue] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const navigate = useNavigate();
  const { final } = useSelector((state) => state.langReducer);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(false);
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
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
      console.log(result);
      // const data = await result.data;
      dispatch({ type: SET_USER_LOGIN, payload: result.data.content });
      localStorage.setItem("USER_ACESS", JSON.stringify(result.data.content));
      navigate("/");
    } catch (err) {
      const error = err.response.data.content;
      setErr(error);
    }
  }

  return (
    <>
      <BackHome />
      {signIn ? (
        <SignIn login={() => setSignIn(false)} />
      ) : (
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
          <br />
          <span className="mt-3 text-primary mr-2">{final.noAcount} ! </span>
          <button
            onClick={() => setSignIn(true)}
            className="btn ml-2 mt-3 btn-success"
          >
            {" "}
            Sign in{" "}
          </button>
          {err && <span className="text-danger mt-3">{err}</span>}
        </form>
      )}
    </>
  );
}
