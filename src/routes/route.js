const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('It is my first ever api!')
});
router.get('/', function (req, res) {
    res.send('Hii my name is Deeptirtha Mukherjee.')
});

module.exports = router;