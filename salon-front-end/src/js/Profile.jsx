import React from 'react';
import styles from "../css/Profile.module.css";
import Navbar from './Navbar';

export default function Profile() {
  return (
    <div>
      <Navbar version="masters" />
      <div className={styles.mainContent}>
        
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Mening Profilim</h1>
          <p className={styles.pageSubtitle}>Profil ma'lumotlarini boshqarish</p>
        </div>

        {/* Profile Container */}
        <div className={styles.profileContainer}>
          
          {/* Profile Card */}
          <div className={styles.profileCard}>
            
            {/* Profile Image Section */}
            <div className={styles.profileImageSection}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <i className="fas fa-user"></i>
                </div>
                <button className={styles.imageUploadBtn}>
                  <i className="fas fa-camera"></i>
                </button>
              </div>
              <div className={styles.imageHint}>Rasm yuklash</div>
            </div>

            {/* Profile Form */}
            <div className={styles.profileForm}>
              
              {/* Personal Info Section */}
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  <i className="fas fa-user-circle"></i>
                  Shaxsiy ma'lumotlar
                </h3>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-user"></i>
                      Ism
                    </label>
                    <input type="text" placeholder="Ismingizni kiriting" />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-user"></i>
                      Familiya
                    </label>
                    <input type="text" placeholder="Familiyangizni kiriting" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-birthday-cake"></i>
                      Yosh
                    </label>
                    <input type="number" placeholder="Yoshingiz" />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-phone"></i>
                      Telefon raqam
                    </label>
                    <input type="tel" placeholder="+998 XX XXX XX XX" />
                  </div>
                </div>
              </div>

              {/* Professional Info Section */}
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  <i className="fas fa-briefcase"></i>
                  Professional ma'lumotlar
                </h3>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-cut"></i>
                      Mutaxassislik
                    </label>
                    <input type="text" placeholder="Masalan: Sartarosh" />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-calendar-check"></i>
                      Tajriba (yil)
                    </label>
                    <input type="number" placeholder="Nechi yildan beri" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    <i className="fas fa-align-left"></i>
                    Qisqacha ma'lumot
                  </label>
                  <textarea 
                    placeholder="O'zingiz haqingizda qisqacha yozing..."
                    rows="4"
                  ></textarea>
                </div>
              </div>

              {/* Services Section */}
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  <i className="fas fa-scissors"></i>
                  Xizmatlar
                </h3>
                
                <div className={styles.servicesGrid}>
                  <div className={styles.serviceItem}>
                    <input type="checkbox" id="service1" />
                    <label htmlFor="service1">
                      <i className="fas fa-cut"></i>
                      <span>Soch olish</span>
                    </label>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <input type="checkbox" id="service2" />
                    <label htmlFor="service2">
                      <i className="fas fa-scissors"></i>
                      <span>Soqol olish</span>
                    </label>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <input type="checkbox" id="service3" />
                    <label htmlFor="service3">
                      <i className="fas fa-spray-can"></i>
                      <span>Styling</span>
                    </label>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <input type="checkbox" id="service4" />
                    <label htmlFor="service4">
                      <i className="fas fa-palette"></i>
                      <span>Rang</span>
                    </label>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <input type="checkbox" id="service5" />
                    <label htmlFor="service5">
                      <i className="fas fa-hand-sparkles"></i>
                      <span>Massage</span>
                    </label>
                  </div>
                  
                  <div className={styles.serviceItem}>
                    <input type="checkbox" id="service6" />
                    <label htmlFor="service6">
                      <i className="fas fa-spa"></i>
                      <span>Kosmetika</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Working Hours Section */}
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  <i className="fas fa-clock"></i>
                  Ish vaqti
                </h3>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-hourglass-start"></i>
                      Boshlanish
                    </label>
                    <input type="time" defaultValue="09:00" />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>
                      <i className="fas fa-hourglass-end"></i>
                      Tugash
                    </label>
                    <input type="time" defaultValue="18:00" />
                  </div>
                </div>

                <div className={styles.workingDays}>
                  <label className={styles.daysLabel}>
                    <i className="fas fa-calendar-week"></i>
                    Ish kunlari
                  </label>
                  <div className={styles.daysGrid}>
                    <div className={styles.dayItem}>
                      <input type="checkbox" id="day1" defaultChecked />
                      <label htmlFor="day1">Du</label>
                    </div>
                    <div className={styles.dayItem}>
                      <input type="checkbox" id="day2" defaultChecked />
                      <label htmlFor="day2">Se</label>
                    </div>
                    <div className={styles.dayItem}>
                      <input type="checkbox" id="day3" defaultChecked />
                      <label htmlFor="day3">Ch</label>
                    </div>
                    <div className={styles.dayItem}>
                      <input type="checkbox" id="day4" defaultChecked />
                      <label htmlFor="day4">Pa</label>
                    </div>
                    <div className={styles.dayItem}>
                      <input type="checkbox" id="day5" defaultChecked />
                      <label htmlFor="day5">Ju</label>
                    </div>
                    <div className={styles.dayItem}>
                      <input type="checkbox" id="day6" />
                      <label htmlFor="day6">Sh</label>
                    </div>
                    <div className={styles.dayItem}>
                      <input type="checkbox" id="day7" />
                      <label htmlFor="day7">Ya</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.formActions}>
                <button className={styles.btnSave}>
                  <i className="fas fa-check"></i>
                  Saqlash
                </button>
                {/* <button className={styles.btnCancel}>
                  <i className="fas fa-times"></i>
                  Bekor qilish
                </button> */}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}