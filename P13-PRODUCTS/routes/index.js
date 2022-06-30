const router = require('express').Router();


// Route in categories
const categoriesRoutes = require('./categories.routes');
router.use('/categories', categoriesRoutes);

// Route in products

module.exports = router;