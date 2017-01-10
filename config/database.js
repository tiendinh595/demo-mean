/**
 * Created by Vu Tien Dinh on 9/14/2016.
 */
'use strict';
var mongoose = require('mongoose');
var db = function () {
    return {
        config: function (conf) {
            mongoose.connect('mongodb://' + conf.host + '/' + conf.dbname);
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        }
    };
};
module.exports = db();