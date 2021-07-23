const express = require('express');
const router = express.Router();

const { homepage, shortUrl, redirectUser } = require('../controllers/app');

// test route
router.get('/', homepage);


// create url
router.post('/shorturl', shortUrl)


// redirect user
router.get('/:shortUrl', redirectUser)

module.exports = router;
