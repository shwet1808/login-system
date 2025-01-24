import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSuccess = (message) => {
    toast.success(message, { position: "top-right", autoClose: 3000 });
  };

  const handleError = (message) => {
    toast.error(message, { position: "top-right", autoClose: 3000 });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;

    if (!email || !password) {
      return handleError("Email and password are required");
    }

    try {
      const url = `http://localhost:8080/auth/login`; // Updated the endpoint to login
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedINUser", name);

        setTimeout(() => {
          navigate("/home"); // Redirect to home after successful login
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "An error occurred.";
        handleError(details);
      } else {
        handleError(message || "Login failed. Please try again.");
      }
    } catch (err) {
      handleError("Network error. Please try again later.");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Login to Your Account</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={login.email}
              required
              autoFocus
            />

            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password"
              value={login.password}
              required
            />
          </div>
          <button type="submit">Log in</button>
          <span>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </span>
        </form>
        <ToastContainer />
      </div>

      {/* Embedded CSS */}
      <style>
        {`
          .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0px 10px 20px rgba(41, 120, 21, 0.1);
            background: linear-gradient(135deg, #fefefe, #e8f0ff);
            font-family: 'Roboto', sans-serif;
          }

          h1 {
            text-align: center;
            color: #333;
            font-size: 28px;
            margin-bottom: 25px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          label {
            font-size: 14px;
            color: #444;
            font-weight: 600;
          }

          input {
            padding: 12px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            transition: box-shadow 0.3s ease;
          }

          input:focus {
            outline: none;
            box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.2);
            border-color: #007bff;
          }

          button {
            padding: 14px;
            font-size: 16px;
            background: linear-gradient(90deg, #007bff, #0056b3);
            color: #fff;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          button:hover {
            background: linear-gradient(90deg, #0056b3, #003d80);
          }

          span {
            display: block;
            margin-top: 20px;
            font-size: 14px;
            text-align: center;
            color: #555;
          }

          a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
          }

          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
}

export default Login;
