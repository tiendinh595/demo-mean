/**
 * Created by Vu Tien Dinh on 9/14/2016.
 */
'use strict';
var fs = require('fs');
var util = require('util');
var Promise = require('promise');
module.exports = function (config) {
    return {
        loadAllRouter: function (app) {
            console.log('config', config.dir.router);
            fs.readdir(config.dir.router, function (err, fillenames) {
                if(err)
                    return null;
                fillenames.forEach(function (filename) {
                    console.log(filename)
                    filename = filename.replace('.js', '');
                    var url = filename.replace(/_/g, '/').replace('default', '');
                    app.use('/'+url, require(config.dir.router+filename))
                })
            })
        }
    };
};
