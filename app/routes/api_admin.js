/**
 * Created by Vu Tien Dinh on 9/14/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();
var md5 = require('md5');
var jwt = require('jsonwebtoken');

var Admin = require('../model/admin');

router.post('/login', function (req, res, next) {

    Admin.find({}, function (err, row) {
        console.log(row)
    });

    Admin.findOne({username: req.body.username, password: md5(req.body.password)}, function (err, user) {
        console.log(user, err)
        if(err)
            return res.json({status: 0, data: 'Có lỗi xảy ra'});
        else {
            if(user) {
                var token = jwt.sign(user, 'xxx');
                req.session.token = token;
                return res.json({status: 1, data: {username: user.username, name: user.name}});
            } else {
                return res.json({status: 0, data: 'Sai tên đăng nhập hoặc mật khẩu'});
            }
        }
    });
});

module.exports = router;