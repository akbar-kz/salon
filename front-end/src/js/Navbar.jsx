import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

export default function Navbar({ version = "default" }) {
  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
  };

  const [open_profile, setOpenProfile] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [active, setActive] = useState("home");

  const { lang, setLang, t } = useTranslation();

  const langChange = (e) => {
    setLang(e.target.checked ? "ru" : "uz");
  };

  return (
    <div style={{ width: "100%", height: "80px" }}>

      {/* ── DESKTOP NAVBAR ── */}
      <nav className="navbar">
        <div className="navbar-container">

          {/* ── DEFAULT version (Home page) ── */}
          {version === "default" && (
            <>
              <div className="left_side">
                <Link to="/">
                  <div className="navbar-brand">
                    <div className="navbar-logo">
                      <i className="fas fa-cut"></i>
                    </div>
                    <div className="navbar-title">Salon Pro</div>
                  </div>
                </Link>

                <a
                  href="/#"
                  className={`nav-link ${active === "home" ? "active" : ""}`}
                  onClick={() => setActive("home")}
                >
                  <i className="fas fa-home"></i>
                  <span>{t.navbar_home}</span>
                </a>
                <a
                  href="/#masters"
                  className={`nav-link ${active === "masters" ? "active" : ""}`}
                  onClick={() => setActive("masters")}
                >
                  <i className="fas fa-users"></i>
                  {t.navbar_masters}
                </a>
                <a
                  href="/#services"
                  className={`nav-link ${active === "services" ? "active" : ""}`}
                  onClick={() => setActive("services")}
                >
                  <i className="fas fa-scissors"></i>
                  {t.navbar_services}
                </a>
                <a
                  href="/#booking"
                  className={`nav-link ${active === "booking" ? "active" : ""}`}
                  onClick={() => setActive("booking")}
                >
                  <i className="fas fa-calendar-check"></i>
                  {t.navbar_booking}
                </a>
              </div>

              <div className="navbar-menu">
                {/* Language toggle */}
                <div className="toggle-button-cover">
                  <div id="button-3" className="button r">
                    <input
                      onChange={langChange}
                      className="checkbox"
                      type="checkbox"
                      checked={lang === "ru"}
                    />
                    <div className="knobs"></div>
                    <div className="layer"></div>
                  </div>
                </div>

                {/* Login — filled rose button */}
                <Link className="nav-link-filled" to="/login">
                  <i className="fas fa-user-circle"></i>
                  {t.navbar_login}
                </Link>
              </div>
            </>
          )}

          {/* ── MASTERS version (Dashboard) ── */}
          {version === "masters" && (
            <>
              <div className="left_side">
                <Link to="/masters">
                  <div className="navbar-brand">
                    <div className="navbar-logo">
                      <i className="fas fa-cut"></i>
                    </div>
                    <div className="navbar-title">Salon Pro</div>
                  </div>
                </Link>

                <Link
                  className={`nav-link ${isActive("/masters") ? "active" : ""}`}
                  to="/masters"
                >
                  <i className="fas fa-home"></i>
                  <span>{t.navbar_home}</span>
                </Link>
                <Link
                  className={`nav-link ${isActive("/create_client") ? "active" : ""}`}
                  to="/create_client"
                >
                  <i className="fas fa-user-plus"></i>
                  <span>{t.navbar_add_client}</span>
                </Link>
                <Link
                  className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
                  to="/dashboard"
                >
                  <i className="fas fa-chart-line"></i>
                  <span>{t.navbar_income}</span>
                </Link>
              </div>

              <div className="navbar-menu">
                {/* Language toggle */}
                <div className="toggle-button-cover">
                  <div id="button-3" className="button r">
                    <input
                      onChange={langChange}
                      className="checkbox"
                      type="checkbox"
                      checked={lang === "ru"}
                    />
                    <div className="knobs"></div>
                    <div className="layer"></div>
                  </div>
                </div>

                {/* Profile dropdown */}
                <div className="profile_template">
                  <div
                    onClick={() => setOpenProfile(true)}
                    className="profil_modals"
                  >
                    <i className="fas fa-user"></i>
                    {t.navbar_profile}
                  </div>

                  <div
                    className={`profil_modal_open ${open_profile ? "active" : ""}`}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--ink)" }}>
                      User_name
                    </span>
                    <hr style={{ marginTop: "10px", borderColor: "var(--border)" }} />
                    <div className="profil_dashboard">
                      <Link to="/profile">
                        <div className="profil_info">
                          <i className="fas fa-cog"></i>
                          {t.navbar_profile_settings}
                        </div>
                      </Link>
                      <Link to="/">
                        <div className="profil_info danger">
                          <i className="fas fa-sign-out-alt"></i>
                          {t.navbar_logout}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </nav>

      {/* ── MOBILE NAVBAR ── */}
      <div className="mobile-navbar">
        <button className="menu-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="navbar-brand">
          <div className="navbar-logo" style={{ width: "34px", height: "34px" }}>
            <i className="fas fa-cut" style={{ fontSize: "16px" }}></i>
          </div>
          <div className="navbar-title">Salon Pro</div>
        </div>
        <div className="toggle-button-cover">
          <div id="button-3" className="button r">
            <input
              onChange={langChange}
              className="checkbox"
              type="checkbox"
              checked={lang === "ru"}
            />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>

      {/* ── SIDEBAR ── */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <i className="fas fa-cut"></i>
          </div>
          <div className="sidebar-title">
            <h2>Salon Pro</h2>
            <p>Premium Edition</p>
          </div>
        </div>

        {version === "default" && (
          <div className="sidebar-menu">
            <a
              href="/#"
              className={`menu-item ${active === "home" ? "active" : ""}`}
              onClick={() => { toggleSidebar(); setActive("home"); }}
            >
              <i className="fas fa-home"></i>
              <span>{t.navbar_home}</span>
            </a>
            <a
              href="/#masters"
              className={`menu-item ${active === "masters" ? "active" : ""}`}
              onClick={() => { toggleSidebar(); setActive("masters"); }}
            >
              <i className="fas fa-users"></i>
              {t.navbar_masters}
            </a>
            <a
              href="/#services"
              className={`menu-item ${active === "services" ? "active" : ""}`}
              onClick={() => { toggleSidebar(); setActive("services"); }}
            >
              <i className="fas fa-scissors"></i>
              {t.navbar_services}
            </a>
            <a
              href="/#booking"
              className={`menu-item ${active === "booking" ? "active" : ""}`}
              onClick={() => { toggleSidebar(); setActive("booking"); }}
            >
              <i className="fas fa-calendar-check"></i>
              {t.navbar_booking}
            </a>
            <Link
              className="menu-item active"
              to="/login"
              onClick={toggleSidebar}
            >
              <i className="fas fa-user-circle"></i>
              {t.navbar_login}
            </Link>
          </div>
        )}

        {version === "masters" && (
          <div className="sidebar-menu">
            <Link
              to="/masters"
              className={`menu-item ${isActive("/masters") ? "active" : ""}`}
              onClick={toggleSidebar}
            >
              <i className="fas fa-home"></i>
              <span>{t.navbar_home}</span>
            </Link>
            <Link
              to="/create_client"
              className={`menu-item ${isActive("/create_client") ? "active" : ""}`}
              onClick={toggleSidebar}
            >
              <i className="fas fa-user-plus"></i>
              {t.navbar_add_client}
            </Link>
            <Link
              to="/dashboard"
              className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}
              onClick={toggleSidebar}
            >
              <i className="fas fa-chart-line"></i>
              {t.navbar_income}
            </Link>
            <Link
              to="/"
              className="menu-item"
              onClick={toggleSidebar}
            >
              <i className="fas fa-sign-out-alt"></i>
              {t.navbar_logout}
            </Link>
          </div>
        )}
      </div>

      {/* ── OVERLAY ── */}
      <div className="overlay" id="overlay" onClick={toggleSidebar}></div>

      {/* ── PROFILE MODAL BACKDROP ── */}
      <div
        onClick={() => setOpenProfile(false)}
        className={`modal_back ${open_profile ? "active" : ""}`}
      ></div>

    </div>
  );
}