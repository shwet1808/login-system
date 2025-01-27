import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({
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

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signup;

    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }

    try {
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "An error occurred.";
        handleError(details);
      } else {
        handleError(message || "Signup failed. Please try again.");
      }
    } catch (err) {
      handleError("Network error. Please try again later.");
    }
  };

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-container">
          <div className="signup-left">
            <h2>Join Our Community</h2>
            <p>Sign up now to enjoy all the features we offer.</p>
          </div>
          <div className="signup-right">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={signup.name}
                  required
                />
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signup.email}
                  required
                />
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signup.password}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
              <p>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />

      <style>
        {`

          h2{
          color:rgb(128, 178, 228) ,}

          html, body {
            height: 100%-fixed;
            overflow-y: hidden;

            margin: 0;
            padding: 0;
            background: url('https://images.unsplash.com/photo-1501471984908-815b996862f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D') no-repeat center center/cover;

          }


          .signup-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          //  background: url('https://media.istockphoto.com/id/1420755455/photo/grunge-dirty-background-overlay.webp?a=1&b=1&s=612x612&w=0&k=20&c=aH0FV8YSsjY3pMDuqu585fE-vOc4z6I6BEEJs1JWrcQ=') no-repeat center center/cover;

          }

          .signup-container {
            display: flex;
            max-width: 800px;
            width: 100%;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
            overflow: hidden;
          }

          .signup-left {
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

          .signup-left h2 {
            font-size: 24px;
            margin-bottom: 15px;
          }

          .signup-left p {
            font-size: 16px;
          }

          .signup-right {
            flex: 1;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .signup-right h2 {
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

          /* Responsive Styles */
          @media (max-width: 768px) {
            .signup-container {
              flex-direction: column;
            }
            .signup-left, .signup-right {
              flex: none;
              width: 100%;
              padding: 20px;
            }
            .signup-left h2 {
              font-size: 20px;
            }
            .signup-right h2 {
              font-size: 20px;
            }
            input {
              font-size: 16px;
            }
            button {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .signup-left h2 {
              font-size: 18px;
            }
            .signup-right h2 {
              font-size: 18px;
            }
            input {
              font-size: 14px;
            }
            button {
              font-size: 12px;
            }
          }

        `}
      </style>
    </>
  );
}

export default Signup;
