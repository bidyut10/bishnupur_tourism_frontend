import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    const res = await axios
      .post("https://bishnupurtourismbackend-production.up.railway.app/login", {
        password: inputs.password,
        email: inputs.email,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendReq()
      .then((data) => localStorage.setItem("admin", JSON.stringify(data)))
      .then(() => alert("Login Successful"))
      .then(() => {
        navigate("/adminpage");
      })
      .catch(() => alert("Oops Incorrect Details"));
  };

  return (
    <div id="login" className="hero min-h-screen bg_home">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-md">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit} action="/login">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="Admin Email"
                className="input input-bordered"
                onChange={handleChange}
                type={"email"}
                value={inputs.email}
                name="email"
                id="email"
                required
                minLength={10}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                placeholder="Admin Password"
                className="input input-bordered"
                onChange={handleChange}
                type={"password"}
                value={inputs.password}
                name="password"
                id="name"
                required
                maxLength={15}
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-green-500 hover:bg-cyan-600 transition-colors duration-300 border-none text-black"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
