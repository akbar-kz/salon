import React, { useState } from 'react'
import styles from '../css/Create_client.module.css'
import Navbar from './Navbar'

export default function Create_client() {

    const [isValue, setIsValue] = useState('percent')
    const [value, setValue] = useState("");

    const setPriceType = (type) => {
  setIsValue(type);
  setValue((prev) => normalizeValue(prev, type));
};


   const Changevalue = (e) => {
  setValue(normalizeValue(e.target.value, isValue ));
};

  
  const normalizeValue = (val, type) => {

if (val === "" || val === null) return "";


  let num = Number(val);
  if (type === "percent" && num > 100) return 100;
  return num;
};



  return (
    <div>
        <Navbar version="masters" />
        {/* Main Content */}
<div className={styles.mainContent}>
    <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Mijoz Qo'shish</h1>
        <p className={styles.pageSubtitle}>Yangi mijoz yoki bron qilish</p>
    </div>

    <div className={styles.formContainer}>
        <div className={`${styles.alert} ${styles.alertError}`} id="error-alert">
            <i className="fas fa-exclamation-circle"></i>
            <span id="error-text"></span>
        </div>
        <div className={`${styles.alert} ${styles.alertSuccess}`} id="success-alert">
            <i className="fas fa-check-circle"></i>
            <span id="success-text"></span>
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label>
                <i className="fas fa-user"></i>
                Ism Familiya
            </label>
            <input type="text" id="client-name" placeholder="Masalan: Alisher Karimov" />
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label>
                <i className="fas fa-scissors"></i>
                Xizmat
            </label>
            <input type="text" id="client-service" placeholder="Masalan: Soch olish" />
        </div>

        <div className={`${styles.priceSection} ${styles.fullWidth}`}>
            <div className={styles.priceHeader}>
                <label>
                    <i className="fas fa-money-bill-wave"></i>
                    Narx ma'lumotlari
                </label>
                <div className={styles.priceTypeToggle}>
                    <button 
                        className={`${styles.priceTypeBtn} ${isValue == 'percent' ? styles.active : ''}`} 
                        data-type="percent" 
                        onClick={() => setPriceType('percent')}
                    >
                        <i className="fas fa-percent"></i>
                        Foiz
                    </button>
                    <button 
                        className={`${styles.priceTypeBtn} ${isValue == 'amount' ? styles.active : ''}`} 
                        data-type="amount" 
                        onClick={() => setPriceType('amount')}
                    >
                        <i className="fas fa-coins"></i>
                        Summa
                    </button>
                </div>
            </div>
            <div className={styles.priceInputs}>
                <div className={styles.formGroup}>
                    <label>
                        <i className="fas fa-hand-holding-usd"></i>
                        Jami Narxi
                    </label>
                    <div className={styles.inputWithIcon}>
                        <input 
                            type="number" 
                            id="client-price" 
                            placeholder="50000" 
                        />
                        <span className={styles.inputIcon}>so'm</span>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>
                        <i className="fas fa-wallet"></i>
                        Menga tegishli
                    </label>
                    <div className={styles.inputWithIcon}>
                        <input 
                            type="number" 
                            id="client-myprice" 
                            placeholder={isValue == 'percent' ? '0-100' : 'narx kiriting'} 
                            onChange={Changevalue}
                            value={value}

                        />
                        {isValue === 'percent' ? (
                            <span className={styles.inputIcon} id="price-unit">%</span>
                            ) : (
                                <span className={styles.inputIcon} id="price-unit">so'm</span>
                            )}
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.formGrid}>
            <div className={styles.formGroup}>
                <label>
                    <i className="fas fa-calendar-alt"></i>
                    Sana
                </label>
                <input 
                    type="date" 
                    id="client-date" 
                />
            </div>

            <div className={styles.formGroup}>
                <label>
                    <i className="fas fa-clock"></i>
                    Vaqt
                </label>
                <input 
                    type="time" 
                    id="client-time" 
                />
            </div>
        </div>

        <div 
            id="occupied-times-section" 
            className={styles.occupiedTimesSection} 
            style={{display: 'none'}}
        >
            <label>
                <i className="fas fa-exclamation-triangle"></i>
                Band vaqtlar:
            </label>
            <div className={styles.occupiedTimes} id="occupied-times"></div>
        </div>

        <div className={styles.formButtons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`} >
                <i className="fas fa-check"></i>
                <span>Mijoz qo'shish</span>
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`} >
                <i className="fas fa-calendar-check"></i>
                <span>Bron qilish</span>
            </button>
        </div>
    </div>
</div>
    </div>
  )
}
