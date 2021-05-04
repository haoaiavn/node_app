const { render } = require('node-sass');
const { mongoosesToObject} = require('../../utils/mongoose');
const Course = require('../models/Course');

class SiteController {
    index(req, res, next) {
        Course.find({})
        .then(courses => res.render('home', {
            courses: mongoosesToObject(courses)
        }))
        .catch(next);
    }
    search(req, res) {  
        res.render('search');
    }
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
