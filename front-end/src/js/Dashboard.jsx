import React from 'react'
import styles from '../css/Dashboard.module.css'
import Navbar from './Navbar'

export default function Dashboard() {
  return (
    <div>
        <Navbar version='masters'/>
        {/* Main Content */}
<div className={styles.mainContent}>
    <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
            Daromad Hisobi
        </h1>
        <p className={styles.pageSubtitle}>Sizning daromadingiz va arenda hisoblari</p>
    </div>

    {/* Today Stats */}
    <div className={styles.todaySection}>
        <div className={styles.todayTitle}>
            <i className="fas fa-calendar-day"></i>
            <span>Bugungi Daromad</span>
        </div>
        <div className={styles.todayStats}>
            <div className={styles.todayStat}>
                <div className={styles.todayStatLabel}>Jami</div>
                <div className={styles.todayStatValue} id="today-total">100 000 so'm</div>
            </div>
            <div className={styles.todayStat}>
                <div className={styles.todayStatLabel}>Sizga</div>
                <div className={styles.todayStatValue} id="today-mine">60 000 so'm</div>
            </div>
            <div className={styles.todayStat}>
                <div className={styles.todayStatLabel}>Arenda</div>
                <div className={styles.todayStatValue} id="today-rent">40 000 so'm</div>
            </div>
            <div className={styles.todayStat}>
                <div className={styles.todayStatLabel}>Mijozlar</div>
                <div className={styles.todayStatValue} id="today-clients">1</div>
            </div>
        </div>
    </div>

    {/* All Time Stats */}
    <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.total}`}>
            <div className={styles.statIcon}>
                <i className="fas fa-coins"></i>
            </div>
            <div className={styles.statLabel}>Jami Daromad</div>
            <div className={styles.statValue} id="total-income">100 000 so'm</div>
            <div className={styles.statPercent}>Barcha mijozlar</div>
        </div>

        <div className={`${styles.statCard} ${styles.mine}`}>
            <div className={styles.statIcon}>
                <i className="fas fa-wallet"></i>
            </div>
            <div className={styles.statLabel}>Sizning ulushingiz</div>
            <div className={styles.statValue} id="my-income">60 000 so'm</div>
            <div className={styles.statPercent} id="my-percent">60.0%</div>
        </div>

        <div className={`${styles.statCard} ${styles.rent}`}>
            <div className={styles.statIcon}>
                <i className="fas fa-store"></i>
            </div>
            <div className={styles.statLabel}>Arenda</div>
            <div className={styles.statValue} id="rent-income">40 000 so'm</div>
            <div className={styles.statPercent} id="rent-percent">40.0%</div>
        </div>
    </div>

    {/* Breakdown */}
    <div className={styles.breakdownCard}>
        <div className={styles.breakdownTitle}>
            <i className="fas fa-chart-pie"></i>
            Daromad Taqsimoti
        </div>
        <div className={styles.breakdownBar}>
            <div className={`${styles.barSegment} ${styles.barMine}`} id="bar-mine" style={{width: '60%'}}>60%</div>
            <div className={`${styles.barSegment} ${styles.barRent}`} id="bar-rent" style={{width: '40%'}}>40%</div>
        </div>
        <div className={styles.breakdownLegend}>
            <div className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.mine}`}></div>
                <span id="legend-mine">Sizning ulushingiz (60.0%)</span>
            </div>
            <div className={styles.legendItem}>
                <div className={`${styles.legendColor} ${styles.rent}`}></div>
                <span id="legend-rent">Arenda (40.0%)</span>
            </div>
        </div>
    </div>

    {/* Search */}
    <div className={styles.searchSection}>
        <div className={styles.searchTitle}>
            <i className="fas fa-search"></i>
            Qidirish
        </div>
        <div className={styles.searchGrid}>
            <input type="text" className={styles.searchInput} id="search-name" placeholder="Ism familiya bo'yicha qidirish..." />
            <input type="date" className={styles.searchInput} id="search-date" />
            <button className={styles.searchBtn} >
                <i className="fas fa-search"></i>
                Qidirish
            </button>
            <button className={styles.clearBtn} >
                <i className="fas fa-times"></i>
                Tozalash
            </button>
        </div>
    </div>

    {/* Table */}
    <div className={styles.tableCard}>
        <div className={styles.tableTitle}>
            <i className="fas fa-table"></i>
            Mijozlar Ro'yxati
        </div>
        <div className={styles.tableWrapper}>
            <table>
                <thead>
                    <tr>
                        <th><i className="fas fa-user"></i> Mijoz</th>
                        <th><i className="fas fa-scissors"></i> Xizmat</th>
                        <th><i className="fas fa-calendar"></i> Sana</th>
                        <th><i className="fas fa-money-bill-wave"></i> Jami</th>
                        <th><i className="fas fa-wallet"></i> Sizga</th>
                        <th><i className="fas fa-building"></i> Arenda</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    <tr>
                        <td><strong>Alisher Baxtiyorov</strong></td>
                        <td>soch</td>
                        <td>2026-01-31 08:07</td>
                        <td className={styles.priceCell}>100 000 so'm</td>
                        <td style={{color: '#B8A4E8', fontWeight: 700}}>
                            60 000 so'm
                            <span style={{fontSize: '12px', color: '#8B7788'}}>(60.0%)</span>
                        </td>
                        <td style={{color: '#E8B4D9', fontWeight: 700}}>
                            40 000 so'm
                            <span style={{fontSize: '12px', color: '#8B7788'}}>(40.0%)</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    </div>
  )
}