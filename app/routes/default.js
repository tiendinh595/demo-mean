/**
 * Created by Vu Tien Dinh on 9/14/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;