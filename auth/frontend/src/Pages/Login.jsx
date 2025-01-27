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
      const url = `http://localhost:8080/auth/login`;
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

        // Auto-reload the page after login
        setTimeout(() => {
          window.location.reload();
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
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-left">
            <h2>Welcome Back</h2>
            <p>Please log in using your personal information to stay connected with us.</p>
          </div>
          <div className="login-right">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={login.email}
                  required
                />
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={login.password}
                  required
                />
              </div>
              <div className="form-footer">
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>
              <button type="submit">Log In</button>
              <p>
                Don’t have an account? <Link to="/signup">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />

      <style>
        {`
          html, body {
            height: 100vh;
            overflow-y: hidden;
            margin: 0;
            padding: 0;
            background: url('https://images.unsplash.com/photo-1501471984908-815b996862f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D') no-repeat center center/cover;
          }

          .login-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .login-container {
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            width: 100%;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
            overflow: hidden;
          }

          .login-left {
            flex: 1;
            background: url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=600') no-repeat center center/cover;
            color: #fff;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .login-left h2 {
            font-size: 24px;
            margin-bottom: 15px;
          }

          .login-left p {
            font-size: 16px;
          }

          .login-right {
            flex: 1;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .login-right h2 {
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          input {
            padding: 12px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
          }

          .form-footer {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
          }

          .forgot-password {
            font-size: 14px;
            color: #007bff;
            text-decoration: none;
          }

          button {
            padding: 12px;
            background: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            background: #0056b3;
          }

          p {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .login-container {
              flex-direction: column;
            }

            .login-left,
            .login-right {
              flex: unset;
              width: 100%;
              padding: 20px;
            }

            .login-left {
              height: 200px;
            }

            .login-left h2 {
              font-size: 20px;
            }

            .login-left p {
              font-size: 14px;
            }

            .login-right h2 {
              font-size: 20px;
            }
          }

          @media (max-width: 480px) {
            .login-left h2,
            .login-right h2 {
              font-size: 18px;
            }

            .login-left p,
            input,
            button {
              font-size: 12px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Login;
