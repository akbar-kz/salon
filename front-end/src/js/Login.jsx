import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import Navbar from "./Navbar";

export default function Login() {
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const username = e.target["login-username"].value.trim();
    const password = e.target["login-password"].value;

    // ── your auth logic here ──
    setTimeout(() => {
      if (username && password) {
        setSuccess("Muvaffaqiyatli kirildi!");
        setTimeout(() => navigate("/masters"), 900);
      } else {
        setError("Username yoki parol noto'g'ri.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="body">
      <Navbar />

      <div className="main_container">
        <div className="container">
          <div className="login-box">

            {/* ── Logo ── */}
            <div className="logo">
              <div className="logo-icon">
                <i className="fas fa-cut"></i>
              </div>
              <h1>Salon Pro</h1>
              <p>Professional Salon Management</p>
            </div>

            {/* ── Alerts ── */}
            <div className={`alert alert-error ${error ? "show" : ""}`}>
              <i className="fas fa-exclamation-circle"></i>
              <span>{error}</span>
            </div>
            <div className={`alert alert-success ${success ? "show" : ""}`}>
              <i className="fas fa-check-circle"></i>
              <span>{success}</span>
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>
                  <i className="fas fa-user"></i>
                  Username
                </label>
                <div className="input-wrapper">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="login-username"
                    placeholder="Username kiriting"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  <i className="fas fa-lock"></i>
                  Parol
                </label>
                <div className="input-wrapper">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="login-password"
                    placeholder="Parol kiriting"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Kirilmoqda...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Kirish</span>
                  </>
                )}
              </button>
            </form>

            <div className="register-link">
              Hisobingiz yo'qmi?{" "}
              <Link to="/register">Ro'yxatdan o'tish</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}