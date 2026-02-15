import React, { useState } from "react";
import "../css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Register() {
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const username = e.target["register-username"].value.trim();
    const email    = e.target["register-email"].value.trim();
    const password = e.target["register-password"].value;

    // ── your register logic here ──
    setTimeout(() => {
      if (username && email && password) {
        setSuccess("Muvaffaqiyatli ro'yxatdan o'tildi!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setError("Barcha maydonlarni to'ldiring.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="body">
      <Navbar />

      <div className="main_container">
        <div className="container">
          <div className="register-box">

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
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label>
                  <i className="fas fa-user"></i>
                  Username
                </label>
                <div className="input-wrapper">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="register-username"
                    placeholder="Username tanlang"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  <i className="fas fa-envelope"></i>
                  Email
                </label>
                <div className="input-wrapper">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="register-email"
                    placeholder="Email kiriting"
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
                    name="register-password"
                    placeholder="Parol yarating"
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
                    <span>Yuborilmoqda...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-user-plus"></i>
                    <span>Ro'yxatdan o'tish</span>
                  </>
                )}
              </button>
            </form>

            <div className="login-link">
              Hisobingiz bormi? <Link to="/login">Kirish</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}