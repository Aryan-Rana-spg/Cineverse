import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", isSuccess: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ text: "", isSuccess: false });

    if (!formData.email || !formData.password) {
      setMessage({
        text: "Please enter both email and password to continue.",
        isSuccess: false,
      });
      return;
    }

    if (!isLoginTab && !formData.name) {
      setMessage({
        text: "Please enter your full name to register.",
        isSuccess: false,
      });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({
        text: "Password must be at least 6 characters.",
        isSuccess: false,
      });
      return;
    }

    if (isLoginTab) {
      setMessage({ text: "Login successful! Redirecting...", isSuccess: true });
      setTimeout(() => {
        navigate("/home");
      }, 800);
    } else {
      setMessage({ text: "Registration complete! Please log in.", isSuccess: true });
      setFormData({ name: "", email: "", password: "" });
      setIsLoginTab(true);
    }
  };

  return (
    <div className="auth-wrapper">
      {message.text && (
        <div
          className={`message-banner ${message.isSuccess ? "success" : "error"}`}
        >
          {message.text}
        </div>
      )}
      <div className="auth-container">
        <div className="tab-headers">
          <button
            className={isLoginTab ? "active" : ""}
            onClick={() => {
              setIsLoginTab(true);
              setMessage({ text: "", isSuccess: false });
            }}
          >
            Login
          </button>
          <button
            className={!isLoginTab ? "active" : ""}
            onClick={() => {
              setIsLoginTab(false);
              setMessage({ text: "", isSuccess: false });
            }}
          >
            Register
          </button>
        </div>
        <h2>{isLoginTab ? "Welcome Back" : "Create Account"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLoginTab && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            {isLoginTab ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
