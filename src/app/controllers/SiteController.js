class SiteController {
    index(req, res) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
