import React, { useState } from "react";
import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedMaster, setSelectedMaster] = useState(null);

  const mastersData = [
    {
      id: 1,
      name: "Aziz Masterov",
      specialty: "Sartarosh",
      rating: 4.9,
      experience: 7,
      bio: "Men professional sartarosh sifatida 7 yildan beri faoliyat yuritib kelmoqdaman. Har bir mijozga individual yondashuv va yuqori sifatli xizmat ko'rsatish mening asosiy maqsadim.",
      services: ["Soch olish", "Soqol olish", "Styling"],
      workingHours: { start: "09:00", end: "18:00" },
      workingDays: ["Du", "Se", "Ch", "Pa", "Ju"],
      phone: "+998 90 123 45 67",
      age: 28
    },
    {
      id: 2,
      name: "Madina Nailova",
      specialty: "Manikür va Pedikür",
      rating: 4.8,
      experience: 5,
      bio: "Manikür va pedikür sohasida mutaxassis. Zamonaviy texnologiyalar va yuqori sifatli materiallar bilan ishlayman. Sizning qo'llaringiz va oyoqlaringiz doim chiroyli bo'lishiga ishonch hosil qilaman.",
      services: ["Manikür", "Pedikür", "Gel lak"],
      workingHours: { start: "10:00", end: "19:00" },
      workingDays: ["Du", "Se", "Ch", "Pa", "Ju", "Sh"],
      phone: "+998 90 234 56 78",
      age: 25
    },
    {
      id: 3,
      name: "Jamshid Stilist",
      specialty: "Universal master",
      rating: 4.9,
      experience: 10,
      bio: "Universal master sifatida barcha turdagi sartarosh va stilist xizmatlarini taqdim etaman. 10 yillik tajribam bilan sizga eng yaxshi natijani kafolatlayman.",
      services: ["Soch olish", "Soch bo'yash", "Soch turmagi", "Styling"],
      workingHours: { start: "08:00", end: "20:00" },
      workingDays: ["Du", "Se", "Ch", "Pa", "Ju", "Sh"],
      phone: "+998 90 345 67 89",
      age: 32
    },
    {
      id: 4,
      name: "Dilnoza Suluvchilik",
      specialty: "Kosmetolog",
      rating: 5.0,
      experience: 8,
      bio: "Professional kosmetolog. Yuz parvarishi, teri tozalash va kosmetik muolajalar bo'yicha mutaxassis. Sizning teringiz sog'lom va chiroyli bo'lishiga yordam beraman.",
      services: ["Yuz parvarishi", "Teri tozalash", "Massage", "Kosmetika"],
      workingHours: { start: "09:00", end: "17:00" },
      workingDays: ["Du", "Se", "Ch", "Pa", "Ju"],
      phone: "+998 90 456 78 90",
      age: 30
    }
  ];

  const openModal = (master) => {
    setSelectedMaster(master);
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
    setSelectedMaster(null);
  };

  return (
    <div>
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <i className="fas fa-crown"></i>
            <span>#1 Premium Salon</span>
          </div>

          {/* italic accent on second word */}
          <h1 className={styles.heroTitle}>
            Salon <em>Pro'ga</em> xush kelibsiz
          </h1>
          <p className={styles.heroSubtitle}>
            Professional masterlar va yuqori sifatli xizmatlar
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Baxtli mijozlar</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Professional masterlar</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Yillik tajriba</div>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <a href="#booking" className={styles.heroBtn}>
              <i className="fas fa-calendar-plus"></i> Bron qilish
            </a>
            <a href="#services" className={styles.heroBtnSecondary}>
              <i className="fas fa-list"></i> Xizmatlar
            </a>
          </div>

          <div className={styles.heroFeatures}>
            <div className={styles.heroFeature}>
              <i className="fas fa-check-circle"></i>
              <span>100% Sifat kafolati</span>
            </div>
            <div className={styles.heroFeature}>
              <i className="fas fa-star"></i>
              <span>Professional jamoamiz</span>
            </div>
            <div className={styles.heroFeature}>
              <i className="fas fa-clock"></i>
              <span>Tez va sifatli xizmat</span>
            </div>
          </div>
        </div>

        {/* subtle decorative SVGs kept but dimmed */}
        <div className={styles.heroDecoration}>
          <svg className={styles.decorIcon} style={{top:"15%",left:"8%"}} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" opacity="0.3"/>
          </svg>
          <svg className={styles.decorIcon} style={{bottom:"25%",right:"10%"}} viewBox="0 0 100 100" fill="none">
            <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="white" opacity="0.15"/>
          </svg>
          <svg className={styles.decorIcon} style={{top:"40%",right:"7%"}} viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" rx="10" stroke="white" strokeWidth="2" opacity="0.25" fill="none"/>
          </svg>
        </div>
      </section>

      <div className={styles.container}>

        {/* ── ABOUT ── */}
        <section className={styles.salonInfo} id="about">
          <h3>
            <i className="fas fa-info-circle"></i>
            Salonimiz haqida
          </h3>
          <p>
            Salon Pro — bu zamonaviy sartaroshxona va go'zallik saloni. Biz 2020 yildan beri
            mijozlarimizga professional xizmat ko'rsatib kelmoqdamiz. Bizning jamoamiz tajribali
            masterlardan iborat bo'lib, har bir mijozga alohida e'tibor qaratamiz.
          </p>
          <p>
            Biz eng so'nggi texnologiyalar va yuqori sifatli mahsulotlardan foydalanamiz.
            Salonimizda qulay va zamonaviy muhit yaratilgan. Mijozlarimizning mamnunligi bizning
            birinchi o'rindagi maqsadimizdir.
          </p>
          <div className={styles.salonFeatures}>
            <div className={styles.featureItem}>
              <i className="fas fa-clock"></i>
              <span>Har kuni 9:00 – 21:00</span>
            </div>
            <div className={styles.featureItem}>
              <i className="fas fa-star"></i>
              <span>Professional masterlar</span>
            </div>
            <div className={styles.featureItem}>
              <i className="fas fa-shield-alt"></i>
              <span>Sifat kafolati</span>
            </div>
            <div className={styles.featureItem}>
              <i className="fas fa-credit-card"></i>
              <span>Qulay to'lov</span>
            </div>
          </div>
        </section>

        {/* ── MASTERS ── */}
        <section id="masters">
          <h2 className={styles.sectionTitle}>Bizning Masterlar</h2>
          <div className={styles.mastersGrid}>
            {mastersData.map((master) => (
              <div key={master.id} className={styles.masterCard}>
                <div className={styles.masterPhoto}>
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className={styles.masterName}>{master.name}</div>
                <div className={styles.masterSpecialty}>{master.specialty}</div>
                <div className={styles.masterExperience}>{master.experience} yillik tajriba</div>
                <button onClick={() => openModal(master)} className={styles.bookMasterBtn}>
                  <i className="fas fa-info-circle"></i> Ko'proq ma'lumot
                </button>
                <a href="#booking" className={styles.bookMasterBtn}>
                  <i className="fas fa-calendar-plus"></i> Bron qilish
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services">
          <h2 className={styles.sectionTitle}>Xizmatlarimiz</h2>
          <div className={styles.servicesGrid}>

            {/* Soch kesish */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceIconWrapper}>
                  <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7h-4l-4-4-4 4H4M4 7v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7M12 11v6M9 14h6"/>
                  </svg>
                </div>
                <div className={styles.serviceName}>Soch kesish</div>
                <div className={styles.serviceDescription}>Zamonaviy va klassik uslubda professional soch kesish xizmati.</div>
                <div className={styles.serviceFeatures}>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Tajribali master</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Premium mahsulotlar</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>30–40 daqiqa</span></div>
                </div>
                <div className={styles.servicePriceWrapper}>
                  <div className={styles.servicePrice}>50,000</div>
                  <div className={styles.servicePriceLabel}>so'm</div>
                </div>
                <a href="#booking" className={styles.serviceBookBtn}>
                  <i className="fas fa-calendar-plus"></i> Bron qilish
                </a>
              </div>
            </div>

            {/* Soch bo'yash */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceIconWrapper}>
                  <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M12 15v7m-4-4h8M8 2v4M16 2v4"/>
                  </svg>
                </div>
                <div className={styles.serviceName}>Soch bo'yash</div>
                <div className={styles.serviceDescription}>Har qanday rangda professional soch bo'yash va rangli asoslash.</div>
                <div className={styles.serviceFeatures}>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Trendagi ranglar</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Soch uchun xavfsiz</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>60–90 daqiqa</span></div>
                </div>
                <div className={styles.servicePriceWrapper}>
                  <div className={styles.servicePrice}>150,000</div>
                  <div className={styles.servicePriceLabel}>so'm</div>
                </div>
                <a href="#booking" className={styles.serviceBookBtn}>
                  <i className="fas fa-calendar-plus"></i> Bron qilish
                </a>
              </div>
            </div>

            {/* Soch turmagi */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceIconWrapper}>
                  <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"/>
                  </svg>
                </div>
                <div className={styles.serviceName}>Soch turmagi</div>
                <div className={styles.serviceDescription}>Maxsus tadbir va bayramlar uchun chiroyli soch turmagi.</div>
                <div className={styles.serviceFeatures}>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Individual dizayn</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Uzoq vaqt turadi</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>45–60 daqiqa</span></div>
                </div>
                <div className={styles.servicePriceWrapper}>
                  <div className={styles.servicePrice}>80,000</div>
                  <div className={styles.servicePriceLabel}>so'm</div>
                </div>
                <a href="#booking" className={styles.serviceBookBtn}>
                  <i className="fas fa-calendar-plus"></i> Bron qilish
                </a>
              </div>
            </div>

            {/* Manikür */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceIconWrapper}>
                  <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h3m12 0h3M12 3v3m0 12v3"/>
                    <path d="M7.5 7.5l2 2m5 5l2 2m-9 0l2-2m5-5l2-2"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                </div>
                <div className={styles.serviceName}>Manikür</div>
                <div className={styles.serviceDescription}>Classic va zamonaviy dizaynda professional tirnoq bezatish.</div>
                <div className={styles.serviceFeatures}>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Gel lak</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Dizayn va bezak</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>40–50 daqiqa</span></div>
                </div>
                <div className={styles.servicePriceWrapper}>
                  <div className={styles.servicePrice}>70,000</div>
                  <div className={styles.servicePriceLabel}>so'm</div>
                </div>
                <a href="#booking" className={styles.serviceBookBtn}>
                  <i className="fas fa-calendar-plus"></i> Bron qilish
                </a>
              </div>
            </div>

            {/* Yuz parvarishi */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceIconWrapper}>
                  <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="5"/>
                    <path d="M3 21c0-3.5 4-6 9-6s9 2.5 9 6"/>
                    <path d="M9 8v1m6-1v1"/>
                    <path d="M12 11c-1 0-1.5.5-1.5 1"/>
                  </svg>
                </div>
                <div className={styles.serviceName}>Yuz parvarishi</div>
                <div className={styles.serviceDescription}>Teri tozalash va yuz masaji bilan professional parvarish.</div>
                <div className={styles.serviceFeatures}>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Chuqur tozalash</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>Teri masaji</span></div>
                  <div className={styles.serviceFeature}><i className="fas fa-check-circle"></i><span>60–75 daqiqa</span></div>
                </div>
                <div className={styles.servicePriceWrapper}>
                  <div className={styles.servicePrice}>120,000</div>
                  <div className={styles.servicePriceLabel}>so'm</div>
                </div>
                <a href="#booking" className={styles.serviceBookBtn}>
                  <i className="fas fa-calendar-plus"></i> Bron qilish
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── BOOKING ── */}
        <section className={styles.bookingSection} id="booking">
          <h3 className={styles.bookingTitle}>
            <i className="fas fa-calendar-check"></i>
            Bron qilish
          </h3>
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <div className={styles.formGroup}>
              <label><i className="fas fa-user"></i>Ismingiz</label>
              <input type="text" name="name" required placeholder="Ismingizni kiriting" />
            </div>
            <div className={styles.formGroup}>
              <label><i className="fas fa-phone"></i>Telefon raqamingiz</label>
              <input type="tel" name="phone" required placeholder="+998 90 123 45 67" />
            </div>
            <div className={styles.formGroup}>
              <label><i className="fas fa-user-tie"></i>Master tanlang</label>
              <select name="master" required>
                <option value="">Master tanlang</option>
                <option value="Aziz Masterov">Aziz Masterov — Sartarosh</option>
                <option value="Madina Nailova">Madina Nailova — Manikür va Pedikür</option>
                <option value="Jamshid Stilist">Jamshid Stilist — Universal master</option>
                <option value="Dilnoza Suluvchilik">Dilnoza Suluvchilik — Kosmetolog</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label><i className="fas fa-scissors"></i>Xizmat turini tanlang</label>
              <select name="service" required>
                <option value="">Xizmat tanlang</option>
                <option value="Soch kesish">Soch kesish — 50,000 so'm</option>
                <option value="Soch turmagi">Soch turmagi — 80,000 so'm</option>
                <option value="Manikür">Manikür — 70,000 so'm</option>
                <option value="Pedikür">Pedikür — 50,000 so'm</option>
                <option value="Yuz parvarishi">Yuz parvarishi — 120,000 so'm</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label><i className="fas fa-calendar-alt"></i>Sanani tanlang</label>
              <input type="date" name="date" required />
            </div>
            <div className={styles.formGroup}>
              <label><i className="fas fa-clock"></i>Vaqtni tanlang</label>
              <select name="time" required>
                <option value="">Vaqt tanlang</option>
                {["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label><i className="fas fa-comment"></i>Qo'shimcha izoh (ixtiyoriy)</label>
              <textarea name="message" placeholder="Biror narsa qo'shmoqchi bo'lsangiz..."></textarea>
            </div>
            <button type="submit" className={styles.btnSubmit}>
              <i className="fas fa-paper-plane"></i> Yuborish
            </button>
          </form>
        </section>

        {/* ── CONTACT ── */}
        <section className={styles.contactSection}>
          <h3 className={styles.contactTitle}>
            <i className="fas fa-phone-alt"></i>
            Bog'lanish
          </h3>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <h4>Manzil</h4>
              <p>Toshkent sh., Yashnobod tumani,<br />Noname ko'chasi</p>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-phone"></i>
              <h4>Telefon</h4>
              <p><a href="tel:+998909999999">+998 90 999 99 99</a></p>
              <p><a href="tel:+998909999998">+998 90 999 99 99</a></p>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p><a href="mailto:info@salonpro.uz">info@salonpro.uz</a></p>
            </div>
            <div className={styles.contactItem}>
              <i className="fas fa-clock"></i>
              <h4>Ish vaqti</h4>
              <p>Dushanba – Yakshanba<br />9:00 – 21:00</p>
            </div>
          </div>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
          <a href="#" className={styles.socialLink}><i className="fab fa-telegram"></i></a>
          <a href="#" className={styles.socialLink}><i className="fab fa-facebook"></i></a>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {selectedMaster && (
        <div className={`${styles.modal} ${isModalActive ? styles.active : ""}`}>
          <div className={styles.modalContent}>
            <button onClick={closeModal} className={styles.modalClose}>
              <i className="fas fa-times"></i>
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalMasterPhoto}>
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className={styles.modalMasterName}>{selectedMaster.name}</h3>
              <div className={styles.modalMasterSpecialty}>{selectedMaster.specialty}</div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h4><i className="fas fa-user-circle"></i>Shaxsiy ma'lumotlar</h4>
                <div className={styles.modalInfoGrid}>
                  <div className={styles.modalInfoItem}><i className="fas fa-birthday-cake"></i><span>{selectedMaster.age} yosh</span></div>
                  <div className={styles.modalInfoItem}><i className="fas fa-calendar-check"></i><span>{selectedMaster.experience} yillik tajriba</span></div>
                  <div className={styles.modalInfoItem}><i className="fas fa-phone"></i><span>{selectedMaster.phone}</span></div>
                </div>
              </div>
              <div className={styles.modalSection}>
                <h4><i className="fas fa-align-left"></i>Qisqacha ma'lumot</h4>
                <p className={styles.modalBio}>{selectedMaster.bio}</p>
              </div>
              <div className={styles.modalSection}>
                <h4><i className="fas fa-scissors"></i>Taqdim etadigan xizmatlar</h4>
                <div className={styles.modalServicesList}>
                  {selectedMaster.services.map((service, index) => (
                    <div key={index} className={styles.modalServiceItem}>
                      <i className="fas fa-check-circle"></i>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.modalSection}>
                <h4><i className="fas fa-clock"></i>Ish vaqti</h4>
                <div className={styles.modalWorkingTime}>
                  <div className={styles.modalTimeInfo}>
                    <i className="fas fa-hourglass-start"></i>
                    <span>{selectedMaster.workingHours.start} – {selectedMaster.workingHours.end}</span>
                  </div>
                  <div className={styles.modalWorkingDays}>
                    {selectedMaster.workingDays.map((day, index) => (
                      <span key={index} className={styles.modalDayBadge}>{day}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a href="#booking" onClick={closeModal} className={styles.modalBookBtn}>
                <i className="fas fa-calendar-plus"></i>
                Bron qilish
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}