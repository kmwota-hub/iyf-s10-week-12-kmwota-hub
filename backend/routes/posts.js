const router = require('express').Router();

let posts = []; // TEMP (fast for demo)

// Get all
router.get('/', (req, res) => {
  res.json(posts);
});

// Create
router.post('/', (req, res) => {
  const newPost = {
    id: Date.now(),
    ...req.body
  };
  posts.push(newPost);
  res.json(newPost);
});

module.exports = router;