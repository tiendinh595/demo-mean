/**
 * Created by Vu Tien Dinh on 9/14/2016.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.get('/', function (req, res, next) {
    try {
        var decoded = jwt.verify(req.session.token, 'xxx');
        console.log(decoded);
        res.render('admin');
    } catch(err) {
        res.redirect('/admin/login');
    }

});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/logout', function (req, res, next) {
    req.session.token = null;
    res.redirect('/admin/login');
});

module.exports = router;