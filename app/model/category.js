/**
 * Created by Vu Tien Dinh on 1/5/2017.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {type: String, requried: [true, 'Bắt buộc nhập']},
    alias: {type: String, requried: [true, 'Bắt buộc nhập']},
    parent: {type: String},
    created_at: {type: Date}
});

module.exports = mongoose.model('categories', schema);