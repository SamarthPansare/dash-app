import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Configuration for the base URL
const BASE_URL = "http://localhost:5000";

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, organisationName }),
    });
    const data = await response.json();
    if (response.ok) {
      // Store the token and organisationName in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('organisation', data.organisationName);

      // Call the onSignUp callback with the token
      onSignUp(data.token);

      // Redirect to the Home Page
      navigate('/');
    } else {
      alert(data.message); // Show error message
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Sign Up</h2>
        <div style={styles.horizontalLine}></div> {/* Horizontal line with shadow */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
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
            type={showPassword ? 'text' : 'password'} // Toggle between text and password
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
        <select
          value={organisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
          style={styles.input}
          required
        >
          <option value="" disabled>Select Organisation</option>
          <option value="BPCL">BPCL</option>
          <option value="HPCL">HPCL</option>
          <option value="IOCL">IOCL</option>
          <option value="PNGRB">PNGRB</option>
        </select>
        <button type="submit" style={styles.button}>Sign Up</button>
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
    width: '100vw', // Ensure container takes full viewport width
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    padding: '30px', // Increased padding
    width: '100%', // Ensure form takes full width of its container
    maxWidth: '450px', // Set a max-width for the form
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // Increased gap for better spacing
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box', // Ensure padding is included in the width
  },
  heading: {
    fontSize: '1.75rem', // Increased font size
    marginBottom: '10px', // Adjusted margin for better spacing
    color: '#007bff',
    textAlign: 'center',
  },
  horizontalLine: {
    width: '100%', // Full width of the form
    height: '1px', // Line thickness
    backgroundColor: '#e0e0e0', // Light gray color for the line
    marginBottom: '20px', // Space below the line
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for the line
  },
  input: {
    padding: '12px', // Increased padding for taller input boxes
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
    fontSize: '16px', // Increased font size for inputs
    outline: 'none',
    transition: 'border-color 0.2s',
    backgroundColor: '#f0f0f0', // Grayish/beige background for input boxes
    color: '#333', // Consistent text color for both placeholder and typed input
    width: '100%', // Ensure input takes full width
    boxSizing: 'border-box', // Ensure padding is included in the width
  },
  passwordContainer: {
    display: 'flex',
    flexDirection: 'column', // Align label and input vertically
    gap: '10px', // Space between input and label
    width: '100%', // Ensure container takes full width
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Space between checkbox and label text
    fontSize: '14px', // Adjusted font size for label text
    color: '#333',
  },
  checkbox: {
    cursor: 'pointer',
  },
  button: {
    padding: '12px', // Increased padding for taller button
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px', // Increased font size for button
    fontWeight: 'bold', // Make text bold
    width: '50%', // Reduce button width
    alignSelf: 'center', // Center the button horizontally
    transition: 'background-color 0.2s',
  },
};

export default SignUp;
