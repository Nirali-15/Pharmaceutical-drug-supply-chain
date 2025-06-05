import React from 'react';
import { FaHome, FaChartBar, FaBoxes, FaUsers, FaCog } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Demo = () => {
  // Example chart data
  const barChartData = {
    labels: ['Outlet A', 'Outlet B', 'Outlet C', 'Outlet D'],
    datasets: [
      {
        label: 'All Outlets',
        data: [1200, 900, 1500, 800],
        backgroundColor: '#42A5F5',
      },
    ],
  };

  const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: [1500, 1800, 2100, 3000],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66,165,245,0.2)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  // Inline Styles
  const styles = {
    container: {
      display: 'flex',
      backgroundColor: '#F5F5F5',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#1F2024',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    },
    sidebarHeader: {
      fontSize: '20px',
      marginBottom: '30px',
      fontWeight: 'bold',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      flex: 1,
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      cursor: 'pointer',
      color: '#FFFFFF',
    },
    navIcon: {
      marginRight: '10px',
    },
    userName: {
      marginTop: 'auto',
      fontSize: '14px',
      color: '#CCCCCC',
    },
    main: {
      flex: 1,
      padding: '20px 40px',
      overflowY: 'auto',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    statsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '20px',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      flex: '1 1 300px',
      minWidth: '280px',
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    cardValue: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '5px 0',
    },
    subtleText: {
      color: '#777',
    },
    chartWrapper: {
      marginTop: '20px',
      width: '100%',
      height: '200px',
    },
  };

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>MENU</div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <FaHome style={styles.navIcon} />
            Home
          </li>
          <li style={styles.navItem}>
            <FaChartBar style={styles.navIcon} />
            Sell
          </li>
          <li style={styles.navItem}>
            <FaChartBar style={styles.navIcon} />
            Reporting
          </li>
          <li style={styles.navItem}>
            <FaBoxes style={styles.navIcon} />
            Catalog
          </li>
          <li style={styles.navItem}>
            <FaBoxes style={styles.navIcon} />
            Inventory
          </li>
          <li style={styles.navItem}>
            <FaUsers style={styles.navIcon} />
            Customers
          </li>
          <li style={styles.navItem}>
            <FaCog style={styles.navIcon} />
            Setup
          </li>
        </ul>
        <div style={styles.userName}>Sasha Merkel</div>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.main}>
        <div style={styles.header}>Hi, here’s what’s happening in your stores</div>

        {/* TOP ROW STATS */}
        <div style={styles.statsContainer}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>This month your stores have sold</div>
            <div style={styles.cardValue}>$8,619.86</div>
            <div style={styles.subtleText}>That’s $1,780.24 more than this time last month!</div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>All Outlets</div>
            <div style={styles.chartWrapper}>
              <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* SECOND ROW STATS */}
        <div style={styles.statsContainer}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Your Sales this Month</div>
            <div style={styles.chartWrapper}>
              <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Transfer</div>
            <p style={styles.subtleText}>You have 1 transfer waiting to be received</p>
            <p>Beats Studio Pro - 20 pcs</p>
            <p>Texas warehouse → IT Dept.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Purchase Orders</div>
            <p style={styles.subtleText}>You have 6 dispatched orders waiting to be received</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
