import React, { useContext, useState } from "react";
import "./signin.css";
import signin from "./signin.jpg";
import { useNavigate } from "react-router-dom";
import Header2 from "../header/Header2";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <Header2 />

      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signin} alt="" />
              </figure>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="username"
                  id="username"
                  onChange={handleChange}
                  className="lInput"
                  autocomplete="username" // Add autocomplete attribute with "username" value
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={handleChange}
                  className="lInput"
                  autocomplete="current-password" // Add autocomplete attribute with "current-password" value
                />
              </div>

              <button
                disabled={loading}
                onClick={handleClick}
                className="lButton"
              >
                Login
              </button>
              {error && <span>{error.message}</span>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
