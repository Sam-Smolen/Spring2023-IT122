//setup the server
const express = require('express');
const app = express();

// configure path to public folder which will store all static files such as images and stylesheets
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// setup view engine, we will be using ejs
app.set('view engine', 'ejs');


// setup different routes
app.get('/', (req, res) => { // route to root directory (homepage, index)
    res.render('index'); // renders index.ejs 
});

// sets route to localhost:3000/about
app.get('/about', (req, res) => {
    res.render('about'); // renders views/about.ejs
});

// setup server to run on port 3000 (localhost:3000)
app.listen(3000);