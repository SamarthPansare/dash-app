import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Configuration for the base URL
const BASE_URL = "http://localhost:5000";

// Reusable IframeRoute component
const IframeRoute = ({ path, title }) => {
  return (
    <div style={styles.fullScreenWrapper}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Unified Dashboard</h1>
        <div style={styles.navLinks}>
          <button onClick={() => window.history.back()} style={styles.button}>Back</button>
        </div>
      </nav>
      <div style={styles.iframeContainer}>
        <iframe
          src={`${BASE_URL}${path}`}
          style={styles.fullScreenIframe}
          title={title}
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn onSignIn={(token) => localStorage.setItem('token', token)} />} />
        <Route path="/signup" element={<SignUp onSignUp={(token) => localStorage.setItem('token', token)} />} />

        {/* Routes for OPEN folder apps */}
        <Route path="/open-oil-gas" element={<IframeRoute path="/open-oil-gas" title="OPEN Oil & Gas App" />} />
        <Route path="/open-pngrb" element={<IframeRoute path="/open-pngrb" title="OPEN PNGRB App" />} />
        <Route path="/open-pngrb-india" element={<IframeRoute path="/open-pngrb-india" title="OPEN PNGRB India App" />} />

        {/* Routes for BPCL apps */}
        <Route path="/bpcl" element={<IframeRoute path="/bpcl" title="BPCL App" />} />

        {/* Routes for HPCL apps */}
        <Route path="/hpcl" element={<IframeRoute path="/hpcl" title="HPCL App" />} />

        {/* Routes for IOCL apps */}
        <Route path="/iocl-cost" element={<IframeRoute path="/iocl-cost" title="IOCL Cost App" />} />
        <Route path="/iocl-terminals" element={<IframeRoute path="/iocl-terminals" title="IOCL Terminals App" />} />

        {/* Routes for PNGRB apps */}
        <Route path="/pngrb-bpcl" element={<IframeRoute path="/pngrb-bpcl" title="PNGRB BPCL App" />} />
        <Route path="/pngrb-bpcl-123" element={<IframeRoute path="/pngrb-bpcl-123" title="PNGRB BPCL 123 App" />} />
        <Route path="/pngrb-cost" element={<IframeRoute path="/pngrb-cost" title="PNGRB Cost App" />} />
        <Route path="/pngrb-hpcl" element={<IframeRoute path="/pngrb-hpcl" title="PNGRB HPCL App" />} />
        <Route path="/pngrb-iocl" element={<IframeRoute path="/pngrb-iocl" title="PNGRB IOCL App" />} />
        <Route path="/pngrb-petroleum" element={<IframeRoute path="/pngrb-petroleum" title="PNGRB Petroleum App" />} />
        <Route path="/pngrb-terminals" element={<IframeRoute path="/pngrb-terminals" title="PNGRB Terminals App" />} />
        <Route path="/pngrb-transportation" element={<IframeRoute path="/pngrb-transportation" title="PNGRB Transportation App" />} />
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
