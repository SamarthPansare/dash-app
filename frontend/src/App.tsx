import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Configuration for the base URL
const BASE_URL = "http://localhost:5000";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn onSignIn={(token) => localStorage.setItem('token', token)} />} />
        <Route path="/signup" element={<SignUp onSignUp={(token) => localStorage.setItem('token', token)} />} />

        {/* Routes for OPEN folder apps */}
        <Route
          path="/open-oil-gas"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/open-oil-gas`}
                  style={styles.fullScreenIframe}
                  title="OPEN Oil & Gas App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/open-pngrb"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/open-pngrb`}
                  style={styles.fullScreenIframe}
                  title="OPEN PNGRB App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/open-pngrb-india"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/open-pngrb-india`}
                  style={styles.fullScreenIframe}
                  title="OPEN PNGRB India App"
                />
              </div>
            </div>
          }
        />

        {/* Routes for BPCL apps */}
        <Route
          path="/bpcl"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/bpcl`}
                  style={styles.fullScreenIframe}
                  title="BPCL App"
                />
              </div>
            </div>
          }
        />

        {/* Routes for HPCL apps */}
        <Route
          path="/hpcl"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/hpcl`}
                  style={styles.fullScreenIframe}
                  title="HPCL App"
                />
              </div>
            </div>
          }
        />

        {/* Routes for IOCL apps */}
        <Route
          path="/iocl-cost"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/iocl-cost`}
                  style={styles.fullScreenIframe}
                  title="IOCL Cost App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/iocl-terminals"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/iocl-terminals`}
                  style={styles.fullScreenIframe}
                  title="IOCL Terminals App"
                />
              </div>
            </div>
          }
        />

        {/* Routes for PNGRB apps */}
        <Route
          path="/pngrb-bpcl"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-bpcl`}
                  style={styles.fullScreenIframe}
                  title="PNGRB BPCL App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/pngrb-bpcl-123"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-bpcl-123`}
                  style={styles.fullScreenIframe}
                  title="PNGRB BPCL 123 App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/pngrb-cost"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-cost`}
                  style={styles.fullScreenIframe}
                  title="PNGRB Cost App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/pngrb-hpcl"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-hpcl`}
                  style={styles.fullScreenIframe}
                  title="PNGRB HPCL App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/pngrb-iocl"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-iocl`}
                  style={styles.fullScreenIframe}
                  title="PNGRB IOCL App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/pngrb-petroleum"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-petroleum`}
                  style={styles.fullScreenIframe}
                  title="PNGRB Petroleum App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/pngrb-terminals"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-terminals`}
                  style={styles.fullScreenIframe}
                  title="PNGRB Terminals App"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/pngrb-transportation"
          element={
            <div style={styles.fullScreenWrapper}>
              <nav style={styles.navbar}>
                <h1 style={styles.logo}>Unified Dashboard</h1>
                <div style={styles.navLinks}>
                  <button onClick={() => window.history.back()} style={styles.button}>Back</button>
                </div>
              </nav>
              <div style={styles.iframeContainer}>
                <iframe
                  src={`${BASE_URL}/pngrb-transportation`}
                  style={styles.fullScreenIframe}
                  title="PNGRB Transportation App"
                />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

// Styles
const styles = {
  fullScreenWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden', // Prevent overflow
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Use 100% instead of 100vw to avoid scrollbars
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: 0,
    boxSizing: 'border-box', // Include padding in the width
  },
  logo: {
    fontSize: '1.5rem',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  iframeContainer: {
    flex: 1,
    width: '100%', // Use 100% instead of 100vw to avoid scrollbars
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box', // Include padding in the width
  },
  fullScreenIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

export default App;
