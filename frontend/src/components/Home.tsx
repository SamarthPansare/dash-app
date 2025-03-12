import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Configuration for the base URL
const BASE_URL = "http://localhost:5000";

const Home = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const organisation = localStorage.getItem('organisation');

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('organisation');
    setToken(null);
  };

  const organisationApps = {
    BPCL: [
      {
        title: 'Cost of Transportation by BPCL',
        description: 'Analyze transportation costs for BPCL.',
        path: '/bpcl',
        previewUrl: `${BASE_URL}/bpcl`,
      },
    ],
    HPCL: [
      {
        title: 'Cost of Transportation by HPCL',
        description: 'Analyze transportation costs for HPCL.',
        path: '/hpcl',
        previewUrl: `${BASE_URL}/hpcl`,
      },
    ],
    IOCL: [
      {
        title: 'Cost of Transportation by IOCL',
        description: 'Analyze transportation costs for IOCL.',
        path: '/iocl-cost',
        previewUrl: `${BASE_URL}/iocl-cost`,
      },
      {
        title: 'IOCL Terminals Capacity and Supply',
        description: 'Monitor IOCL terminals in North India.',
        path: '/iocl-terminals',
        previewUrl: `${BASE_URL}/iocl-terminals`,
      },
    ],
    PNGRB: [
      {
        title: 'BPCL Terminals Capacity, Supply, and Transportation Cost',
        description: 'Monitor BPCL terminals and transportation costs.',
        path: '/pngrb-bpcl',
        previewUrl: `${BASE_URL}/pngrb-bpcl`,
      },
      {
        title: 'BPCL Terminals Capacity, Supply, and Transportation Cost 123',
        description: 'Monitor BPCL terminals and transportation costs (123).',
        path: '/pngrb-bpcl-123',
        previewUrl: `${BASE_URL}/pngrb-bpcl-123`,
      },
      {
        title: 'Cost of Transportation by OMCs',
        description: 'Analyze transportation costs for OMCs.',
        path: '/pngrb-cost',
        previewUrl: `${BASE_URL}/pngrb-cost`,
      },
      {
        title: 'HPCL Terminals Capacity and Supply',
        description: 'Monitor HPCL terminals in North India.',
        path: '/pngrb-hpcl',
        previewUrl: `${BASE_URL}/pngrb-hpcl`,
      },
      {
        title: 'IOCL Terminals Capacity, Supply, and Transportation Cost',
        description: 'Monitor IOCL terminals and transportation costs.',
        path: '/pngrb-iocl',
        previewUrl: `${BASE_URL}/pngrb-iocl`,
      },
      {
        title: 'Petroleum Products and Infrastructure',
        description: 'Monitor petroleum products and infrastructure.',
        path: '/pngrb-petroleum',
        previewUrl: `${BASE_URL}/pngrb-petroleum`,
      },
      {
        title: 'Terminals Capacity and Supply',
        description: 'Monitor terminals capacity and supply.',
        path: '/pngrb-terminals',
        previewUrl: `${BASE_URL}/pngrb-terminals`,
      },
      {
        title: 'Transportation Cost Analysis',
        description: 'Analyze transportation costs.',
        path: '/pngrb-transportation',
        previewUrl: `${BASE_URL}/pngrb-transportation`,
      },
    ],
  };

  // Get apps grouped by organisation
  const getGroupedApps = () => {
    if (organisation === 'PNGRB') {
      // If the user is from PNGRB, return all apps grouped by organisation
      return Object.entries(organisationApps).map(([org, apps]) => ({
        organisation: org,
        apps,
      }));
    } else {
      // Otherwise, return only the apps for the user's organisation
      return [
        {
          organisation,
          apps: organisationApps[organisation] || [],
        },
      ];
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Dashboard</h1>
        <div style={styles.navLinks}>
          {token ? (
            <button onClick={handleSignOut} style={styles.button}>Sign Out</button>
          ) : (
            <>
              <button onClick={() => navigate('/signin')} style={styles.button}>Sign In</button>
              <button onClick={() => navigate('/signup')} style={styles.button}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      <div style={styles.appGrid}>
        <div style={styles.appCard} onClick={() => navigate('/open-oil-gas')}>
          <div style={styles.cardHeader}>
            <h3 style={styles.appTitle}>Oil & Gas Industry Dashboard</h3>
            <p style={styles.appDescription}>Explore insights into the oil and gas industry.</p>
          </div>
          <iframe
            src={`${BASE_URL}/open-oil-gas`}
            style={styles.iframePreview}
            title="OPEN Oil & Gas App Preview"
          />
        </div>
        <div style={styles.appCard} onClick={() => navigate('/open-pngrb')}>
          <div style={styles.cardHeader}>
            <h3 style={styles.appTitle}>PNGRB Dashboard</h3>
            <p style={styles.appDescription}>Monitor regulatory and infrastructure data.</p>
          </div>
          <iframe
            src={`${BASE_URL}/open-pngrb`}
            style={styles.iframePreview}
            title="OPEN PNGRB App Preview"
          />
        </div>
        <div style={styles.appCard} onClick={() => navigate('/open-pngrb-india')}>
          <div style={styles.cardHeader}>
            <h3 style={styles.appTitle}>PNGRB India Dashboard</h3>
            <p style={styles.appDescription}>Track progress and performance metrics.</p>
          </div>
          <iframe
            src={`${BASE_URL}/open-pngrb-india`}
            style={styles.iframePreview}
            title="OPEN PNGRB India App Preview"
          />
        </div>
      </div>

      {organisation && (
        <>
          {getGroupedApps().map((group, index) => (
            <React.Fragment key={index}>
              <div style={styles.orgHeadingContainer}>
                <h2 style={styles.orgHeading}>{group.organisation}</h2>
              </div>
              <div style={styles.appGrid}>
                {group.apps.map((app, idx) => (
                  <div key={idx} style={styles.appCard} onClick={() => navigate(app.path)}>
                    <div style={styles.cardHeader}>
                      <h3 style={styles.appTitle}>{app.title}</h3>
                      <p style={styles.appDescription}>{app.description}</p>
                    </div>
                    <iframe
                      src={app.previewUrl}
                      style={styles.iframePreview}
                      title={`${app.title} Preview`}
                    />
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  logo: {
    fontSize: '1.5rem',
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
  appGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '0 0',
    margin: '20px auto',
    maxWidth: '80%',
    boxSizing: 'border-box',
  },
  appCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e0e0e0',
  },
  cardHeader: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #e0e0e0',
  },
  appTitle: {
    fontSize: '1.25rem',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  appDescription: {
    fontSize: '0.9rem',
    color: '#333',
    marginBottom: '10px',
  },
  iframePreview: {
    width: '100%',
    height: '200px',
    border: 'none',
  },
  orgHeadingContainer: {
    width: '80%',
    margin: '40px auto 20px auto',
    textAlign: 'center',
    padding: '15px 0',
    backgroundColor: '#DCDCDC',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  orgHeading: {
    fontSize: '2.2rem',
    fontWeight: '600',
    color: '#1a3c6e',
    margin: 0,
    paddingBottom: '5px',
    borderBottom: '3px solid #007bff',
    display: 'inline-block',
  },
};

export default Home;
