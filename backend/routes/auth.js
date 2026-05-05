const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register
router.post('/register', async (req, res) => {
  const user = await User.create(req.body);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ user, token });
});

// Login
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ error: 'User not found' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ user, token });
});

module.exports = router;