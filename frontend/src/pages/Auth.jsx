import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import { API_BASE_URL } from "../services/api";

const BACKEND_URL = `${API_BASE_URL}/api/auth`;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", isSuccess: false });

    const endpoint = isLoginTab ? "/login" : "/register";
    const payload = isLoginTab
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await axios.post(`${BACKEND_URL}${endpoint}`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      const result = response.data;

      if (endpoint === "/login" && !result.includes("successful")) {
        setMessage({ text: result, isSuccess: false });
      } else {
        setMessage({ text: result, isSuccess: true });
        if (isLoginTab) {
          setTimeout(() => {
            navigate("/home");
          }, 1200);
        } else {
          setFormData({ name: "", email: "", password: "" });
          setIsLoginTab(true);
        }
      }
    } catch (error) {
      const errorMsg =
        error.response?.data || "Could not connect to the backend server.";
      setMessage({ text: errorMsg, isSuccess: false });
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
