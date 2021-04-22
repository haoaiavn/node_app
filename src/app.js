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
//app.use(morgan("combined"));

//middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// change .extname
app.engine('hbs', exphbs({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res)=> res.render('home'));
app.get('/about', (req, res)=> res.render('about'));
app.get('/news', (req, res)=> res.render('news'));
app.get('/search', (req, res)=> res.render('search'));
app.post('/search', (req, res)=> {
    res.render('search');
    console.log(req.body);
});

app.listen(port, ()=> console.log(`Listenning at localhost:${port}`));