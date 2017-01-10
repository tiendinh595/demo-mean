/**
 * Created by Vu Tien Dinh on 1/3/2017.
 */

var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    created_at: {type: 'Date', required: [true, 'Ngày tạo không được rỗng']}
});

module.exports = mongoose.model('admin', schema);