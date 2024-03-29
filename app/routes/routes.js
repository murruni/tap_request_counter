const express = require('express');
const router = express.Router();

// users routes
router.use('/user', require('./user'));

// counts
router.use('/count', require('./count'));

module.exports = router;