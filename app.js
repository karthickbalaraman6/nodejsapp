const express = require('express');
const path = require('path');
const app = express();

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve login.html when accessing root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Handle login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    res.send('<h2>Welcome, admin!</h2>');
  } else {
    res.send('<h2>Invalid username or password</h2>');
  }
});

// Start server
app.listen(3000, () => {
  console.log('App running on port 3000');
});
