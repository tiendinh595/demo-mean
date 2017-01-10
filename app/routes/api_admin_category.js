/**
 * Created by Vu Tien Dinh on 9/14/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Category = require('../model/category');

router.get('/all', function (req, res) {
    console.log('accessing');
    Category.find({}, function (err, rows) {
        if(err)
            return res.json([]);
        return res.json(rows);
    });
});

router.get('/add', function (req, res) {
   var category = new Category();
    category.name = req.name;
    category.alias = req.alias;
    category.parent = req.parent;
    category.save(function (err) {
        if(err)
            res.send('err');
        else
            res.send('ok');
    })
});

module.exports = router;