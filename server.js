const express = require('express');
const cors = require('cors');
const path = require('path'); // Required for file paths
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.post('/location', (req, res) => {
  console.log('Received location:', req.body);
  res.json({ status: 'Location received!', data: req.body });
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(8081, () => console.log('Server running on port 8081'));