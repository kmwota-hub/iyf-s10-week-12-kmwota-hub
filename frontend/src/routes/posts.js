
const { protect, optionalAuth, restrictTo } = require('../middleware/auth');

// Public routes
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);

// Protected routes
router.post('/', protect, postsController.createPost);
router.put('/:id', protect, postsController.updatePost);
router.delete('/:id', protect, postsController.deletePost);

// Admin only
router.delete('/:id/force', protect, restrictTo('admin'), postsController.forceDelete);