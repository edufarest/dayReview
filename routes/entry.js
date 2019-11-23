let express = require('express');
let router  = express.Router();

let entry = require('../controllers/entriesController');

router.get('/', (req, res, next) => {
    res.send('hello');
})

router.post('/', entry.create);

module.exports = router;
