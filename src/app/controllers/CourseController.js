const { mongooseToObject} = require('../../utils/mongoose');
const Course = require('../models/Course');

class CourseController {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(course => res.render('courses/show', {
            course: mongooseToObject(course)
        }))
        .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }

    post(req, res, next) {
        var course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }

}

module.exports = new CourseController();
