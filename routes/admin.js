var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    let email = req.query.inputEmail;
    let password = req.query.inputPassword;
    res.render('admin');
});

module.exports = router;