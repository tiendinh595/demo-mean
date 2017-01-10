/**
 * Created by Vu Tien Dinh on 1/3/2017.
 */

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({
    name: {type: String, required: [true, 'Tiêu đề không được rỗng'], index: true},
    content: {type:'String', required: [true, 'Nội dung không được rỗng']},
    description: {type:'String', required: [true, 'Mô tả không được rỗng']},
    category: {type: String, required:[true, 'Chưa chọn chuyên mục']},
    thumb: {type: String, required:[true, 'Chưa chọn chuyên mục']},
    view: {type: String, default: 0},
    created_at: {type: 'Date', required: [true, 'Ngày tạo không được rỗng']}
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('posts', schema);
