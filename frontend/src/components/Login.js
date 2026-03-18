import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8081/auth/login",
        user
      );

      alert("Login successful");

    } catch (error) {

      alert("Invalid credentials");

    }
  };

  return (
    <div className="container mt-4">

      <h2>Login</h2>

      <input
        className="form-control mb-2"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button className="btn btn-success" onClick={loginUser}>
        Login
      </button>

    </div>
  );
}

export default Login;