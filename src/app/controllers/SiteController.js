const Course = require('../models/Course');

class SiteController {
    index(req, res) {
        Course.find({}, function(err, courses) {
            if(!err){
                res.json(courses);
                console.log(courses.length);
            } else {
                res.status(400).json({error: 'Error!!!'});
            }
        });
    }
    search(req, res) {  
        res.render('search');
    }
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
