const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const sass = require('node-sass');
const app = express();
const port = 3000;

// static file
app.use(express.static(path.join(__dirname, 'public')))
// show log res, req when F5
app.use(morgan("combined"));
// change .extname
app.engine('hbs', exphbs({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res)=> res.render('home'));
app.get('/about', (req, res)=> res.render('about'));
app.get('/news', (req, res)=> res.render('news'));
app.get('/search', (req, res)=> {
    console.log(req.query);
    res.render('search');
});

app.listen(port, ()=> console.log(`Listenning at localhost:${port}`));