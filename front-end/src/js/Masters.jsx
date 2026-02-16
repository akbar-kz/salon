import React, { useState } from "react";
import styles from "../css/Masters.module.css";
import Navbar from "./Navbar";
import { useTranslation } from "../hooks/useTranslation";

export default function Masters() {
  const [currentView, setCurrentView] = useState("main");
  const [isModalActive, setIsModalActive] = useState(false);
  const [backapi, setBackapi] = useState(true);

  const { t } = useTranslation();

  const showMain = () => setCurrentView("main");
  const showClients = () => setCurrentView("clients");
  const showBookings = () => setCurrentView("bookings");

  

  return (
    <div>
      <Navbar version="masters" />
      <div className={styles.mainContent}>

        {/* Main View */}
        <div
          id="main-view"
          className={`${styles.mainView} ${currentView === "main" ? styles.active : ""}`}
          style={{ display: currentView === "main" ? "block" : "none" }}
        >
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>{t.masters_title}</h1>
            <p className={styles.pageSubtitle}>{t.masters_subtitle}</p>
          </div>

          <div className={styles.mainCards}>
            <div onClick={() => showClients()} className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <i className="fas fa-users"></i>
              </div>
              <div className={styles.mainCardTitle}>{t.masters_clients}</div>
              <div className={styles.mainCardCount} id="clients-count">0</div>
              <div className={styles.mainCardDesc}>{t.masters_clients_desc}</div>
            </div>

            <div onClick={() => showBookings()} className={styles.mainCard}>
              <div className={styles.mainCardIcon}>
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className={styles.mainCardTitle}>{t.masters_bookings}</div>
              <div className={styles.mainCardCount} id="bookings-count">0</div>
              <div className={styles.mainCardDesc}>{t.masters_bookings_desc}</div>
            </div>
          </div>
        </div>

        {/* Clients View */}
        <div
          id="clients-view"
          className={`${styles.detailView} ${currentView === "clients" ? styles.active : ""}`}
        >
          <button onClick={() => showMain()} className={styles.backBtn}>
            <i className="fas fa-arrow-left"></i>
            {t.masters_back}
          </button>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-users"></i>
            {t.masters_clients}
          </h2>
          <div className={styles.clientsGrid} id="clients-list">
            {backapi === false ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>📭</div>
                <p className={styles.emptyStateText}>{t.masters_no_clients}</p>
              </div>
            ) : (
              <div className={styles.clientCard}>
                <div className={styles.clientHeader}>
                  <div>
                    <div className={styles.clientName}>
                      <i className="fas fa-user-circle"></i>
                      Alisher Baxtiyorov
                    </div>
                    <div className={styles.clientInfo}>
                      <i className="fas fa-calendar-alt"></i>
                      2026-01-31 08:07
                    </div>
                    <div className={styles.clientInfo}>
                      <i className="fas fa-scissors"></i>
                      soch
                    </div>
                  </div>
                  <div className={styles.clientPrice}>306 049 so'm</div>
                </div>
                <div className={styles.clientActions}>
                  <button onClick={() => setIsModalActive(true)} className={`${styles.btn} ${styles.btnEdit}`}>
                    <i className="fas fa-edit"></i>
                    {t.masters_edit}
                  </button>
                  <button className={`${styles.btn} ${styles.btnDelete}`}>
                    <i className="fas fa-trash-alt"></i>
                    {t.masters_delete}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bookings View */}
        <div
          id="bookings-view"
          className={`${styles.detailView} ${currentView === "bookings" ? styles.active : ""}`}
        >
          <button onClick={() => showMain()} className={styles.backBtn}>
            <i className="fas fa-arrow-left"></i>
            {t.masters_back}
          </button>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-calendar-check"></i>
            {t.masters_booked_clients}
          </h2>
          <div className={styles.clientsGrid} id="bookings-list">
            {backapi === false ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>📅</div>
                <p className={styles.emptyStateText}>{t.masters_no_bookings}</p>
              </div>
            ) : (
              <div className={styles.clientCard}>
                <div className={styles.clientHeader}>
                  <div>
                    <div className={styles.clientName}>
                      <i className="fas fa-user-circle"></i>
                      Gayratbek
                    </div>
                    <div className={styles.clientInfo}>
                      <i className="fas fa-calendar-alt"></i>
                      2026-01-31 16:56
                    </div>
                    <div className={styles.clientInfo}>
                      <i className="fas fa-scissors"></i>
                      soch
                    </div>
                  </div>
                  <div className={styles.clientPrice}>{t.masters_no_price}</div>
                </div>
                <div className={styles.clientActions}>
                  <button className={`${styles.btn} ${styles.btnConfirm}`}>
                    <i className="fas fa-check-circle"></i>
                    {t.masters_confirm}
                  </button>
                  <button onClick={() => setIsModalActive(true)} className={`${styles.btn} ${styles.btnEdit}`}>
                    <i className="fas fa-edit"></i>
                    {t.masters_edit}
                  </button>
                  <button className={`${styles.btn} ${styles.btnCancel}`}>
                    <i className="fas fa-times-circle"></i>
                    {t.masters_cancel}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div className={`${styles.modal} ${isModalActive ? styles.active : ""}`} id="edit-modal">
        <div className={styles.modalContent}>
          <h3 className={styles.modalTitle}>
            <i className="fas fa-edit"></i>
            {t.masters_edit}
          </h3>
          <div className={styles.formGroup}>
            <label>
              <i className="fas fa-user"></i>
              {t.masters_modal_name}
            </label>
            <input type="text" id="edit-name" />
          </div>
          <div className={styles.formGroup}>
            <label>
              <i className="fas fa-scissors"></i>
              {t.masters_modal_service}
            </label>
            <input type="text" id="edit-service" />
          </div>
          <div className={styles.priceEditSection}>
            <div className={styles.formGroup}>
              <label>
                <i className="fas fa-money-bill-wave"></i>
                {t.masters_modal_total_price}
              </label>
              <input type="number" id="edit-price" />
            </div>
            <div className={styles.formGroup}>
              <label>
                <i className="fas fa-wallet"></i>
                {t.masters_modal_my_price}
              </label>
              <input type="number" id="edit-myprice" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>
              <i className="fas fa-calendar-alt"></i>
              {t.masters_modal_date}
            </label>
            <input type="date" id="edit-date" />
          </div>
          <div className={styles.formGroup}>
            <label>
              <i className="fas fa-clock"></i>
              {t.masters_modal_time}
            </label>
            <input type="time" id="edit-time" />
          </div>
          <div className={styles.modalActions}>
            <button onClick={() => setIsModalActive(false)} className={styles.btnSave}>
              <i className="fas fa-check"></i> {t.masters_save}
            </button>
            <button onClick={() => setIsModalActive(false)} className={styles.btnClose}>
              <i className="fas fa-times"></i> {t.masters_cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}