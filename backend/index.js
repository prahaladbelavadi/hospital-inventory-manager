const express = require('express');
const ops = require('./ops');
const mongoose = require('mongoose');

const app = new express();
app.use(express.json());

mongoose.connect(
  'mongodb://localhost:27017/covid',
  { useNewUrlParser: true },
  () => {
    console.log('Successfully connected');
  }
);

// Check Status of server
app.get('/', (req, res) => {
  res.send('Server Running');
});

// Create New Volunteer
app.post('/volunteer', (req, res) => {
  ops.createUser(req, res);
});

// Login
app.post('/login', (req, res) => {
  ops.login(req, res);
});

app.get('/centers', (req, res) => {
  ops.fetchAllCenterData(req, res);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
