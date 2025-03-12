import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Configuration for the base URL
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:5000";

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      // Store the token and organisationName in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('organisation', data.organisationName);

      // Call the onSignIn callback with the token
      onSignIn(data.token);

      // Redirect to the Home Page
      navigate('/');
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Sign In</h2>
        <div style={styles.horizontalLine}></div> {/* Horizontal line with shadow */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              style={styles.checkbox}
            />
            Show Password
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    width: '100vw',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    padding: '30px',
    width: '100%',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    border: '1px solid #e0e0e0',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '10px',
    color: '#007bff',
    textAlign: 'center',
  },
  horizontalLine: {
    width: '100%',
    height: '1px',
    backgroundColor: '#e0e0e0',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    backgroundColor: '#f0f0f0',
    color: '#333',
    width: '100%',
    boxSizing: 'border-box',
  },
  passwordContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#333',
  },
  checkbox: {
    cursor: 'pointer',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '50%',
    alignSelf: 'center',
    transition: 'background-color 0.2s',
  },
};

export default SignIn;
