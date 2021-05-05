const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, default: 'No name'},
    description: {type: String, default: ''},
    detail: {type: String, default: ''},
    image: {type: String, default: ''},
    slug: {type: String, slug: 'name', unique: true}
}, 
{timestamps: true});

module.exports = mongoose.model('Course', Course);