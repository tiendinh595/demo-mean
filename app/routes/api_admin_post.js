/**
 * Created by Vu Tien Dinh on 9/14/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var multer = require('multer');
var Jimp = require("jimp");

var Post = require('../model/post');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'resources/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({storage: storage}).single('file');

router.post('/add', function (req, res) {
    var post = new Post();
    post.name = req.body.name;
    post.content = req.body.content;
    post.thumb = req.body.thumb;
    post.description = req.body.description;
    post.category = req.body.category;
    post.created_at = new Date();
    post.save(function (err) {
        if (err)
            res.json({status: 0, data: err});
        else
            res.json({status: 1});
    })
});

router.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            console.log('err1', err);
            return res.json({status: 0, thumb: '/publics/assets/images/no.jpg'});
        }
        try {
            Jimp.read('resources/uploads/' + req.file.filename, function (err, lenna) {
                if (err) {
                    console.log('err2', err);
                    return res.json({status: 0, thumb: '/publics/assets/images/no.jpg'});
                }
                lenna.resize(185, 123)
                    .quality(60)
                    .greyscale()
                    .write('resources/uploads/' + req.file.filename);
                return res.json({status: 0, thumb: '/publics/uploads/' + req.file.filename});
            });

        } catch (e) {
            console.log('err3', e);
            return res.json({status: 0, thumb: '/publics/assets/images/no.jpg'});
        }
    });
});

router.get('/detail/:id', function (req, res) {
   Post.findOne({_id: req.params.id}, function (err, post) {
       if(err)
           return res.json([]);
       return res.json(post);
   })
});


router.post('/update/:id', function (req, res) {
    Post.findOne({_id: req.params.id}, function (err, post) {
        if(err)
            return res.json({status:0});
        post.name = req.body.name;
        post.content = req.body.content;
        post.thumb = req.body.thumb;
        post.description = req.body.description;
        post.category = req.body.category;
        post.save(function (err) {
            if (err)
                res.json({status: 0, data: err});
            else
                res.json({status: 1});
        })
    })

});

router.get('/all', function (req, res) {
    Post.paginate({}, { page: req.query.p, limit: 10, sort: {_id: -1} }).then(function(result) {
        return res.json(result)
    });
});

router.get('/delete/:id', function (req, res) {
    Post.remove({_id: req.params.id}, function (err) {
        if(err)
            return res.json({status:0});
        return res.json({status:1});
    });
});

module.exports = router;