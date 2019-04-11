const router = require('express').Router();

router.post('/', (req, res) => {
    return res.json({success: true});
});

module.exports = router;