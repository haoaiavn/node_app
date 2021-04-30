const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const sass = require('node-sass');
const route = require('./routes/');

const db = require('./app/config/db');
const app = express();
const port = 3000;


//connect db
db.connect();// static file
app.use(express.static(path.join(__dirname, 'public')));
// show log res, req when F5
//app.use(morgan("combined"));

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// change .extname
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => console.log(`Listenning at localhost:${port}`));
