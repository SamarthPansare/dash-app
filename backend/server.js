const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'admin',
  host: process.env.POSTGRES_HOST || 'localhost' || 'postgres',
  database: process.env.POSTGRES_DB || 'dashboard_app',
  password: process.env.POSTGRES_PASSWORD || 'password',
  port: process.env.POSTGRES_PORT || 5432,
});

// Test PostgreSQL connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Failed to connect to PostgreSQL', err);
  } else {
    console.log('Connected to PostgreSQL');
  } });

app.post('/api/signup', async (req, res) => {
  const { name, email, password, organisationName } = req.body;

  try {
    // Check if user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const newUser = await pool.query(
      'INSERT INTO users (name, email, password, organisation_name) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashedPassword, organisationName]
    );

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.rows[0].id, organisationName: newUser.rows[0].organisation_name },
      'your-secret-key',
      { expiresIn: '1h' }
    );

    // Include organisationName in the response
    res.status(201).json({ token, organisationName: newUser.rows[0].organisation_name });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});
// Signin Route
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.rows[0].id, organisationName: user.rows[0].organisation_name },
      'your-secret-key',
      { expiresIn: '1h' }
    );

    // Include organisationName in the response
    res.status(200).json({ token, organisationName: user.rows[0].organisation_name });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Serve static files for each app
const serveApp = (appPath, route) => {
  app.use(route, express.static(path.join(__dirname, appPath)));
  app.get(`${route}/*`, (req, res) => {
    res.sendFile(path.join(__dirname, appPath, 'index.html'));
  });
};

// Serve BPCL app
serveApp('BPCL/Cost of Transportation by BPCL in Existing Scenario/project/dist', '/bpcl');

// Serve HPCL app
serveApp("HPCL/Cost of Transportation by OMCs in Existing Scenario (HPCL)/project/dist", '/hpcl');

// Serve IOCL (Cost) app
serveApp('IOCL/Cost Of Transoportation by IOCL in Existing Scenario/project/dist', '/iocl-cost');

// Serve IOCL (Terminals) app
serveApp('IOCL/IOCL Terminals Capacity and Supply Dashboard (North India)/project/dist', '/iocl-terminals');

// Serve OPEN (Oil & Gas Industry Dashboard) app
serveApp('OPEN/Oil & Gas Industry Dashboard/project/dist', '/open-oil-gas');

// Serve OPEN (PNGRB Dashboard) app
serveApp('OPEN/PNGRB Dashboard/project/dist', '/open-pngrb');

// Serve OPEN (PNGRB India Dashboard) app
serveApp('OPEN/PNGRB India Dashboard/project/dist', '/open-pngrb-india');

// Serve PNGRB (BPCL Terminals) app
serveApp('PNGRB/BPCL Terminals Capacity, Supply, and Transportation Cost Dashboard/project/dist', '/pngrb-bpcl');

// Serve PNGRB (BPCL Terminals 123) app
serveApp('PNGRB/BPCL Terminals Capacity, Supply, and Transportation Cost Dashboard 123/project/dist', '/pngrb-bpcl-123');

// Serve PNGRB (Cost of Transportation by OMCs) app
serveApp('PNGRB/Cost of Transportation by OMC\'s/project/dist', '/pngrb-cost');

// Serve PNGRB (HPCL Terminals) app
serveApp('PNGRB/HPCL Terminals Capacity and Supply Dashboard (North India)/project/dist', '/pngrb-hpcl');

// Serve PNGRB (IOCL Terminals) app
serveApp('PNGRB/IOCL Terminals Capacity, Supply, and Transportation Cost Dashboard/project/dist', '/pngrb-iocl');

// Serve PNGRB (Petroleum Products) app
serveApp('PNGRB/Petroleum Products and Infrastructure Dashboard/project/dist', '/pngrb-petroleum');

// Serve PNGRB (Terminals Capacity) app
serveApp('PNGRB/Terminals Capacity and Supply Dashboard (North India)/project/dist', '/pngrb-terminals');

// Serve PNGRB (Transportation Cost Analysis) app
serveApp('PNGRB/Transportation Cost Analysis Dashboard/project/dist', '/pngrb-transportation');

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Unified Dashboard');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
