// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');


router.post('/signup', async (req, res) => {
  console.log( "signup");
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    console.log("existingUser");
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword
    });
    res.status(201).json({ message: 'User created successfully' }); // Send token to client
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// User Signin
router.post('/signin', async (req, res) => {
  try {
    // Check if the username exists
    console.log(req.body, "login");
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
